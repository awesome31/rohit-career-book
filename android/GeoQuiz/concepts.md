# Concepts Learnt

1. By default the entry point of an android application is the MainActivity file.

2. Layouts are defined using an xml file. There are primarily two types of views that exist in layout:
    1. View => These control the layout of a particular element. Classes like TextView or ButtonView extend from the View class.
    2. ViewGroup => These are not rendered on the mobile device but rather, control the way the View elements are laid out on the screen.
    3. For each View element we create a separate tag in our XML file. Each XML element has an attribute.
    4. Each XML element can contain children. Children are other XML elements nested inside a particular element.

3. We can reference **resources** in our XML files and our activity files. Resources can be strings, images etc.

4. We can preview the XML that we have created using the Design Preview tab in the Android editor. We also have a list of attributes that we can add to each
   XML element.

5. Each XML Layout file that we create needs to be converted into View Objects in our Kotlin code. This is done by an Activity.
   We inflate the layout (create an object from the layout file) and then set the content view using the setContentView function.

6. A layout is a resource. A layout is a resource. A resource is a piece of your application that
   is not code – things like image files, audio files, and XML files.

7. We can attach listeners to each view to listen to click events or any other event that we want to use. Android development is an event driven system and based on these events we react or change
   the UI. When building Android applications, Android studio uses Android asset packaging tool to take the layout files and convert them into View object. The LayoutInflater class does this
   installation.