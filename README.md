## CS 416 - UIUC - Narrative Visualization Final Project

UIUC CS 416 Final Project Essay By Arindam Chakraborty

Messaging: I have created this narrative visualization for the CS 416 Data Visualization course. This visualization has been constructed using slideshow narrative visualization technique, also tried to incorporate hybrid elements of the drill-down technique. This is top to buttom slidshow. Each slide define the guidance on how to interact with the visualization. User can use Next and Previous like to go back and forth. Also I have used links to go tospecific slide. The visual consistency has been maintaining uniform elements throughout, introducing a mixture of text, image and chart elements, different colors.

Scenes: The scenes themselves are constructed via HTML id tags. Each scene has a unique id that is linked via the buttons.The “Next/Previous” buttons allow users to navigate from scene to scene independently, but the structure helps guide the overall narrative. Each scene is composed of a unique chart that highlights its own distinct message.

Annotations: Annotations remain consistent on the charts, even throughout changes triggered by the interactions. This allows the userto have some grounding on the overall message the visualization is trying to communicate. For example, the annotation in chart 1, you can find Higher Tornado Risk States for individual years in red. If user change the year the respective message would be changed. This can help a user better understand which car makes consistently have good mileage across both parameters.

Parameters: The visualizations have a handful of relevant parameters that help the user better explore the data. Chart 1, 2 and 4 has the dropdown to change the yesrs.

Triggers: The triggers are implemented via events and callbacks, such as “mouseover”, “mouseout” and “onchange”. When specific html elements experience these events, the callback function is invoked, and we can change the visualization with respect to the action indicated by the trigger. The example triggers we have here are the buttons and hovering legend.
