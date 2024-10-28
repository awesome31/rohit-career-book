# Android Development Concepts

## Entry Point

By default, the entry point of an Android application is the `MainActivity` file. This file acts as the initial point of interaction for users, setting the stage for the app’s functionality and user experience.

## Layouts

Layouts in Android are defined using XML files. There are two main types of views that exist within these layouts: the **View** and the **ViewGroup**. A **View** controls the layout of a particular element, with classes like `TextView` or `ButtonView` extending from the `View` class. Meanwhile, a **ViewGroup** is not rendered on the mobile device but is crucial in controlling how the `View` elements are arranged on the screen. Each `View` element corresponds to a separate tag in the XML file, where each XML element has its own attributes and can contain nested children elements.

## Resources

Within the XML and activity files, it is possible to reference various **resources**. These resources can be strings, images, or other content that the application uses.

## Design Preview

Android Studio’s Design Preview tab allows developers to visualize the XML layouts they create. This tab also provides a list of attributes that can be added to each XML element, enhancing the overall development process.

## XML Layout to View Object

Every XML layout file must be converted into `View` objects in Kotlin code. This task is handled by an Activity, which inflates the layout—creating an object from the layout file—and then sets the content view using the `setContentView` function.

## Resources Definition

A layout is considered a resource. In the context of Android development, a resource is any part of your application that isn’t code, such as image files, audio files, and XML files.

## Event Listeners

It is possible to attach listeners to each view to monitor click events or any other events. Android development operates on an event-driven system, meaning that the UI reacts or changes based on these events. The Android Asset Packaging Tool (AAPT) is used by Android Studio to take the layout files and convert them into `View` objects. The `LayoutInflater` class plays a key role in this inflation process.

## Architectural Patterns

In Android development, various architectural patterns exist, all sharing the Model component. Models essentially contain the data that activities need to use.

## Tools Attributes

Using the `tools` attributes on XML tags ensures that dynamic content is correctly previewed during development.

## View Bindings

Instead of obtaining references to views and then attaching listeners or changing content, a more efficient approach is to use view bindings. View Bindings facilitate cleaner code and ensure the correct typing of XML elements.

## Screen Density Pixels

Android devices come in a wide variety of shapes and sizes. Even just among phones, specifications such as screen size and resolution vary widely. Modern phones have pixel densities ranging from less than 300 pixels per inch to more than 800 pixels per inch. What happens when you want to display the same UI on different density screens? Or when the user configures a larger-than-default text size? It would be a very frustrating user experience if your button were tiny on one device and massive on another. To provide a consistent experience on all devices, Android provides density-independent dimension units that you can use to get the same size on different screen densities. Android translates these units using the device’s defined density bucket to pixels at runtime, so there is no tricky math for you to do. These density buckets range from low density (LDPI) to medium density (MDPI) to high density (HDPI) and all the way up to extra-extra-extra-high density (XXXHDPI)

Sills, Bryan; Gardner, Brian; Marsicano, Kristin; Stewart, Chris. Android Programming (Big Nerd Ranch Guides) (p. 109). Pearson Education. Kindle Edition.

## Best Practices

It's always a good practice to separate reusable code into functions that can be invoked from different places within an application. This approach not only promotes code reusability but also enhances the maintainability and readability of the codebase.
