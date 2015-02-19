===================
Box implementations
===================

This section provides links to different implementations of HBox and VBox.
This is an experiment to put the implementations side-by side and 
test their performance.

Each implementation comes in two versions: one simple version in the form
of one hbox with 3 elements, and one more complex version that consists
of an hbox with two vboxes that each have 4 hboxes with 3 elements. 
The latter is thus an example of deep nesting as you might find in 
more complex GUI's. 

The implementations
===================

Table
-----

The curren ``zoof.ui`` implements hbox and vbox using a table. The
advantage is that the html table can already do much of the layout,
especially for the horizontal direction. In the vertical direction it
needs some help with a bit of JS.


Box
---

This is the ``display: box`` model from 2009. Most browsers seem to
implement it, but it's sort of deprecated.

Flex
----

This is the ``display: flex`` model, which supsersedes the ``display:
box``. It is the latest iteration of the flexbox model. Still in draft,
I think.


Phosphor
--------

PhosphorJS is a WIP by Chris Colbert
(https://github.com/phosphorjs/phosphor-ui) that basically does all the layout
in JS.


Test pages
==========

Here's a list with the test pages. Open them in a new window and do a
continous resize. FPS is shown.

.. raw:: html

    <a href='../_static/boxdemos/boxdemo_table1.html'> Table simple </a> and
    <a href='../_static/boxdemos/boxdemo_table2.html'> Table nested </a> <br/>
    
    <a href='../_static/boxdemos/boxdemo_box1.html'> Box simple </a> and
    <a href='../_static/boxdemos/boxdemo_box2.html'> Box nested </a> <br/>
    
    <a href='../_static/boxdemos/boxdemo_flex1.html'> Flex simple </a> and
    <a href='../_static/boxdemos/boxdemo_flex2.html'> Flex nested </a> <br/>
    
    <a href='../_static/boxdemos/boxdemo_phosphor1.html'> Phosphor simple </a> and
    <a href='../_static/boxdemos/boxdemo_phosphor2.html'> Phosphor nested </a> <br/>


Results
=======

I tested the pages for compliance (do they actually show what they're
supposed to show?) and performance (how much FPS do I get when I
resize?). Here are the results for some systems.





