//propagation - sequence of the events how it is going to propagate
//bubbling - how events bubbles from child to parent to top
//focus,blur are the events which are not bubbles

//event.target - always gives the element name where event is first appeared
//event.currentTarget - always gives the current element

//event capturing/ tricking - using event capturing ,{capture:true} we can
// propagate events from top to bottom

//event.stopPropagation()- we can stop propagation of events to its child events

//event delegation - when we have multiple elements in one parent element and
// we have to add events in all the elements, we can add only one events to
//parent element and we can hamdle our lgic as per condition. ex _ lists
