Looking at this component, there are 2 separate parts to the larger component as a whole:

1.  The title bar
2.  The content

 we could even break down 
 the title bar into 3 component parts, 
 1. the menu button, 
 2. the title, and 
 3. the search icon. 

1. The container component
 build a wrapper component we'll call App that might look similar to this:

{lang=javascript,crop-query=.App} <<
we use the attribute called className in React instead of the HTML version of class.

2. Child components
When a component is nested inside another component, it's called a child component. A component can have multiple children components. The component that uses a child component is then called it's parent component.


1. , the header component looks like this, with a container element <div className="header">, the menu icon, a title, and the search bar:

{lang=javascript,crop-query=.Header} <<
{lang=javascript,crop-query=.Content} <<

0. Putting it all together!!
Two children components, we can set the .Header and the .Content components to be children of the App component.

1. Going data-driven
