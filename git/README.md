# Introduction to Git

Git is a distributed version control system, as opposed to the traditional version control system which is centralized. There are 2 types of commands that git has, porcelain commands and plumbing commands.

## Key terms

1. repo: A project tracked by git.
2. commit: A ppint in time representing the codebase in its entirety.
3. index or staging: Area in which we prepare the changes we wish to commit.
4. Squash: Combining multiple commits.
5. Work tree: This is your own git repo.

We need to remember that git is an acylcic graph. Each commit is a node in the graph and each pointer is a child to parent relationship. We need to rememver that in git workflow we have: untracked files, staged files and commited files. If we delete an untracked file, we will not be able to retreive it again.

Git config is the configuration file that we use to setup the username and email and tokens that are required. Each project can have its own git config file and then we have a global config file. Local config file overides the global config file.

## The basics

If we know these commands, then we can do a lot of things with git.

1. git add: This command adds the untracked files to the staging area.
2. git commit: This command commits the changes to be tracked by git. This has the authorname, date and time and creates a SHA(Secure Hashing algorithm) key.
3. git status: This command tells you the status of the repo.

We also have a way to check what are the things that are a part of the commit:

1. git log --graph => Gives a graphical representation of the logs.
2. git log -decorate => Gives a decorated version of the logs.

Commit SHA (Secure Hashing Algorithm) is a unique identifier to uniquely identify the commit. It is an amalgation of the username, time of the day etc etc.

### What is a commit graph?

```javascript
    git cat-file -p c165c5fb0245d50ac93a02c02dbf27d5aa6e58fc
```

To understand how the data structure of git works, the best mental model is to imagine that git is a graph structure.

1. A tree is a directory. It can contain blobs or more trees inside it.
2. A blob is a file.

**Each blob contains the entirety of the file. The key concept to understand is that git does not store diffs.**
It stores the whole file. If we create another commit, we will see something called parent when do the cat-file command.

### Configs

1. --add will add a key to the config. Each key consists of a section name and the key name. --add <sectionName>.<keyname> <value>
2. The interesting part is that we can add multiple keys with the same name. git takes the last value from the list.
3. --unset will remove a key. --unset-all will remove all keys with the same key value.

## Branching, Merging and Rebasing

### Branching

1. We can find the branches in the refs folder in git.
2. We can use git switch or git checkout to switch to a specific branch and use git branch to create a new file. We can do git switch -c to create a branch and switch to it.

### Merging

1. A commit is the state of the codebase in a point of time. Suppose we have some work done, that we want to bring back to our branch, how can we do that?
2. A merge can have 2 outcomes depending on what the histories of the 2 branches that need to be merged is.
3. A merge is the process of combning 2 histories together, which at some point may have diverged. There is a common ancestor between the 2. Its called the merge base.

There are 2 outcomes to the merge command:

1. If we have two divergent branches, then the merge command asks for a merge commit.
2. If we have linear branches, then the merge command DOES NOT ask for a merge commit. When we create a PR, we always try to do this Fast Forward merge.

### Rebasing

1. git rebease <tagret_branch> -> This is how we rebase a target branch.
2. Rebase will add commits from the target branch into the current branch in a linear fashion. git rebease changes the history of the branch.

### HEAD and reflog

1. HEAD is a pointer to the commit that we are currently using.
2. git reflog tells us where our head has been. If I keep switching branches and I want to know where my HEAD was a while ago, I can use reflog.
3. As long as we have the SHAs for the commit, we can get the file.
4. If we just want one commit instead of everything in the diverged branch that I lost, I can use cherrypick.

## Remote repositories

1. Git is a distributed version control system. That means anyone with a copy of the repository can work with git.
2. We can add a remote to git using git remote add <name> <uri>. The URI can also be a file in your file system. It need not necessarily be a public URL.
3. If we only have one single source of truth repo, then you should name the repo as origin. IF we have fork then we call it upstream.
4. git fetch will fetch the latest objects from the remote repo and not do anything else. If we want to merge the changes on the remote to our local repository, we make use of git merge or git pull. We can check for the logs in origin by doing git log origin/master --oneline.

### Pull and Push

1. If I want the changes of my remote repo in my local copy, I can do git fetch and git merge. Instead of doing this 2 step process, we can just do git pull.
   TIP: Always rebase changes when you are fetching from remote instead of merging since rebasing will add the changes to the tip of the file.

## Conflict Resolution

### Stashing

We can stash our changes using git stash. Stash is a stack data structure and an area in the .git folder that is used for changes that are work in progress. You can push and pop in a stash (just assume that its a stack.)

## Git tools

There are some usecases where we have to search for a particular bug or problem in the codebase.

1. git log --grep foo -p => Shows changes along with the changes.
2. git log -p -- src/index.js => Shows us changes that are done in a particular file.

### Git bisect

This is a great great tool that helps us in figuring out where bugs are. There are two properties that need to hold true:

1. Commits are cronologically ordered.
2. You know a commit where the issue is not present.

We can start by doing:

1. git bisect start
2. git bisect bad -> This will be the commit that is failing.
3. git bisect good -> This will be the commit that is working.

Instead of doing this manually, we can automate the whole thing.
**Git bisect IS AN AMAZING TOOL.**

### Git revert or reset

Git revert changes and creates a commit for the same. Restore actually goes back in state.
Git reset helps you just go back n commits.

### Worktrees

They are an alternative to stash.
git worktree add will add things to the work tree.
