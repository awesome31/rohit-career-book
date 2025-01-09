# Knowledge Base

This is a list of questions I have asked over the years to understand a tech concept better.

## Questions

### Why is my short link redirect to the universal link not working on IOS but is working on Android?

This is because Android's App Links (their equivalent of Universal Links) handle redirects differently than iOS. Let me explain the key differences:

Android's Approach:
Android follows HTTP redirects and will still open the app even after redirections
It verifies the final destination URL against your app's Digital Asset Links (assetlinks.json)
The verification happens after following all redirects
iOS's Approach:
iOS is more strict about security and domain verification
It checks the initial URL domain against your app's Associated Domains
If the initial domain isn't in your app's Associated Domains, it won't follow through with the Universal Link
Once the redirect chain starts in the browser, the Universal Link opportunity is lost
This is why your short links work fine on Android but fail on iOS. Android's more lenient approach to redirects makes it more convenient in this case, but iOS's stricter approach is designed with security in mind to prevent potential malicious redirects.

To make it work consistently across both platforms, you'll need to either:

Set up Universal Links for your short link domain (iOS approach)
Use direct links without redirects
Or use your short link domain in both assetlinks.json and apple-app-site-association files

### Should I use a seperate AWS account for each environment on my application?

The reasons, in no particular order:

1. **security**: managing complex IAM policies to create boundaries within a single account is really hard; conversely, one account per environment forces boundaries by default: you can enable cross account access but you have to be very deliberate
2. **auditing**: access to your different environments is more difficult when all activity happens in the same account
3. **performance**: some services don't have the same performance characteristics when operating in VPC vs non-VPC (ie. Lambda cold starts increased latency when operating in VPC)
4. **naming**: instead of using the AWS account id to identify the environment you're operating in, you have to add prefixes or suffixes to all the resources in the account - this is a matter of preference but nonetheless..
5. **compliance**: if you ever need to adhere to some compliance standard such as HIPAA which imposes strict restrictions on how long you can hold on to data and who can access data, it becomes really difficult to prove which data is production and which data is test etc. (this goes back to #1 and #2 above)
6. **cost control**: in dev, test, staging environments you may want to give people pretty wide permissions to spin up new resources but put low spending caps to prevent accidental usage spikes; conversely in a production account you'll want restricted ability to spin up resources but higher spending caps; easy to enforce via separate account - not so much in the same account

### What happens when you build a Next.js app? What does the build folder contain?

When you run the build command (`next build`), Next.js compiles your application into an optimized production-ready bundle. This process involves several steps:

1. **Code Compilation**: Compiles your JavaScript and TypeScript code.
2. **Tree Shaking**: Removes unused code to reduce bundle size.
3. **Static Generation**: Pre-renders pages that can be static.
4. **SSR Preparation**: Prepares pages for server-side rendering.

Contents of the `.next` Folder:

After running `next build`, Next.js generates a `.next` folder in your project directory. Here's a breakdown of what you'll typically find inside the `.next` folder:

1. **`cache/`**: Contains cached data to speed up subsequent builds.
2. **`server/`**: Contains server-related assets, including compiled pages for SSR.
3. **`static/`**: Holds static files for optimized images, static assets, and pre-rendered pages.
4. **`chunks/`**: Stores chunked JavaScript files for code-splitting.
5. **`webpack/`**: Contains webpack-related information and compiled assets.
6. **`build-manifest.json`**: A manifest file listing all the generated assets and their mappings.
7. **`react-loadable-manifest.json`**: Used for code-splitting with React Loadable.
8. **`prerender-manifest.json`**: Information about which pages were pre-rendered during the build.
9. **`routes-manifest.json`**: Defines the routing structure of your application.
10. **`BUILD_ID`**: A unique identifier for the build to ensure cache invalidation.

The `.next` folder contains everything Next.js needs to serve your application in production. It includes optimized assets, pre-rendered pages, manifest files, and more.

### What are chunks in web development?

In the context of web development, particularly with JavaScript bundlers like Webpack (which Next.js uses under the hood), "chunks" refer to bundles of code that have been split into smaller pieces to optimize loading performance.

Types of Chunks:

1. **Entry Chunks**:

   - These are the main entry points of your application.
   - Typically include the core logic of your app.

2. **Async Chunks**:

   - Created for parts of the code that are loaded dynamically.
   - These chunks are only loaded when needed, such as when a user navigates to a specific page.

3. **Vendor Chunks**:
   - Contain third-party libraries and dependencies.
   - By separating these from your main code, you can leverage browser caching.

How Chunks Work:

- **Code Splitting**: During the build process, tools like Webpack analyze your code and determine the optimal way to split it into chunks. This involves identifying dependencies and splitting the code based on usage patterns.
- **Loading**: When a user visits your application, the initial HTML will load the necessary entry chunks. As the user navigates, additional chunks are loaded dynamically.
- **Caching**: Chunks that don't change frequently, like vendor libraries, are cached by the browser, reducing the load time for repeat visits.

Benefits of Using Chunks:

- **Improved Performance**: By splitting the code, the initial load time is reduced, as the browser only needs to load the necessary chunks initially.
- **Better Caching**: Unchanged chunks can be cached, meaning that users don't need to re-download them on subsequent visits.
- **Asynchronous Loading**: Non-essential parts of the application can be loaded on demand, improving perceived performance.

Example:

Imagine you have a large application with multiple pages. Instead of loading the entire app's code upfront, you can use chunks to load only the code required for the initial page and then dynamically load other parts as the user navigates.

How Next.js Uses Chunks:

- **Pages and Components**: Next.js splits each page and component into separate chunks.
- **Dynamic Imports**: Components imported dynamically (using `import()` syntax) are also split into separate chunks.
- **Vendor Chunks**: Third-party libraries are separated into vendor chunks to optimize caching.

In summary, chunks are a powerful tool to optimize the performance of your web application by splitting the code into smaller, manageable pieces that can be loaded as needed. This results in faster load times, better caching, and an overall smoother user experience.
