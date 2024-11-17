# GeoQuiz App

## Concepts

### Entry Point

By default, the entry point of an Android application is the `MainActivity` file. This file acts as the initial point of interaction for users, setting the stage for the app’s functionality and user experience.

### Layouts

Layouts in Android are defined using XML files. There are two main types of views that exist within these layouts: the **View** and the **ViewGroup**. A **View** controls the layout of a particular element, with classes like `TextView` or `ButtonView` extending from the `View` class. Meanwhile, a **ViewGroup** is not rendered on the mobile device but is crucial in controlling how the `View` elements are arranged on the screen. Each `View` element corresponds to a separate tag in the XML file, where each XML element has its own attributes and can contain nested children elements.

### Resources

Within the XML and activity files, it is possible to reference various **resources**. These resources can be strings, images, or other content that the application uses.

### Design Preview

Android Studio’s Design Preview tab allows developers to visualize the XML layouts they create. This tab also provides a list of attributes that can be added to each XML element, enhancing the overall development process.

### XML Layout to View Object

Every XML layout file must be converted into `View` objects in Kotlin code. This task is handled by an Activity, which inflates the layout—creating an object from the layout file—and then sets the content view using the `setContentView` function.

### Resources Definition

A layout is considered a resource. In the context of Android development, a resource is any part of your application that isn’t code, such as image files, audio files, and XML files.

### Event Listeners

It is possible to attach listeners to each view to monitor click events or any other events. Android development operates on an event-driven system, meaning that the UI reacts or changes based on these events. The Android Asset Packaging Tool (AAPT) is used by Android Studio to take the layout files and convert them into `View` objects. The `LayoutInflater` class plays a key role in this inflation process.

### Architectural Patterns

In Android development, various architectural patterns exist, all sharing the Model component. Models essentially contain the data that activities need to use.

### Tools Attributes

Using the `tools` attributes on XML tags ensures that dynamic content is correctly previewed during development.

### View Bindings

Instead of obtaining references to views and then attaching listeners or changing content, a more efficient approach is to use view bindings. View Bindings facilitate cleaner code and ensure the correct typing of XML elements.

### Screen Density Pixels

Android devices come in a wide variety of shapes and sizes. Even just among phones, specifications such as screen size and resolution vary widely. Modern phones have pixel densities ranging from less than 300 pixels per inch to more than 800 pixels per inch. What happens when you want to display the same UI on different density screens? Or when the user configures a larger-than-default text size? It would be a very frustrating user experience if your button were tiny on one device and massive on another. To provide a consistent experience on all devices, Android provides density-independent dimension units that you can use to get the same size on different screen densities. Android translates these units using the device’s defined density bucket to pixels at runtime, so there is no tricky math for you to do. These density buckets range from low density (LDPI) to medium density (MDPI) to high density (HDPI) and all the way up to extra-extra-extra-high density (XXXHDPI)

Sills, Bryan; Gardner, Brian; Marsicano, Kristin; Stewart, Chris. Android Programming (Big Nerd Ranch Guides) (p. 109). Pearson Education. Kindle Edition.

### Best Practices

It's always a good practice to separate reusable code into functions that can be invoked from different places within an application. This approach not only promotes code reusability but also enhances the maintainability and readability of the codebase.

## Activity Lifecycle

There are 4 states that an activity can be in. We need to remember that the user does not explicitly call these lifecycle methods. They are called by the OS, we just override them in our Activity Subclasses.

### Non Existent

Here the activity is not inside the memory and neither is it visible to the users. This happens in cases where the activity is fully destroyed either by programatically or if the user manually kills the application.

Methods:

1. onCreate -> This is called when activity goes from non-existent to created.
2. onDestroy -> This is called when activity goes from created to non-existent.

### Created

Here the activity is in memory, but it is not visible to the user. This state comes in transition when the activity is spinning up or when the activity is going out of view.

Methods:

1. onStart -> This is called when activity goes from created to started.
2. onStop -> This is called when activity goes from started to created.

### Started

Here the activity is in memory, but partially or fully visible to the user. For example if we have a transparent modal on top.

Methods:

1. onResume -> This is called when activity goes from started to resumed.
2. onPause -> This is called when activity goes from resumed to started.

### Resumed

Here the activity is in memory, in foreground and visible to the user.

Device configuration changes are a common way bugs get introduced in the system. Configuration changes include orientation changes, screen density changes among others. When the device configuration changes, the OS tries to find an activity and layout which is best suited for this configuration and hence it recreates the activity.

## View Models

The user behaviour when the user's configuration changes is to keep the UI state intact and the configuration changes should be applied. If the UI state resides inside the Activity itself, when a configuration change happens, the activity is destroyed and created again. A better place to keep the UI state is a ViewModel.

ViewModel lifecycle is separate from the Activities lifecycle and configuration changes does not recreate the Activity Lifecycle. ViewModels are persisted till the activity is finished.

The relationship between a ViewModel and an Activity is always unidirectional. A ViewModel should never reference an activity or there will be memory leaks.

### Saving Data Across Process Death

Each app gets its own process (more specifically, a Linux process) containing a single thread to execute UI-related work on and a piece of memory to store objects in. An app’s process can be destroyed by the OS if the user navigates away for a while and Android needs to reclaim memory. When an app’s process is destroyed, all the objects stored in that process’s memory are destroyed. Processes containing resumed or started activities get higher priority than other processes. When the OS needs to free up resources, it will select lower-priority processes first. Practically speaking, a process containing a visible activity will not be reclaimed by the OS. If a foreground process does get reclaimed, that means something is horribly wrong with the device (and your app being killed is probably the least of the user’s concerns). But processes that do not have any activities in the started or resumed state are fair game to be killed. So, for example, if the user navigates to the Home screen and then goes and watches a video or plays a game, your app’s process might be killed.

We use the SavedStateHandle to store data during process deaths. It shiuld not be used for long term storage of data. For long term storage, databases and shared preferences is a better option.

## Debugging Android applications
