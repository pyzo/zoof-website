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
box``. It is the latest iteration of the flexbox model (http://www.w3.org/TR/css-flexbox-1/).
At the time of writing it is still in draft though. However, with the right CSS
(e.g. ``-moz-flex``, ``-ms-flex``, etc.) it may work well. 


Phosphor
--------

PhosphorJS is a WIP by Chris Colbert
(https://github.com/phosphorjs/phosphor-ui) that basically does all the layout
in JS. I included this as an example what a JS based layout could do.


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
resize?). Here are the results for some systems. To be filled in as
I do more tests.

.. raw:: html
    
    <style>
    table.boxresults {
        text-align: center;
        padding: 10px;
    }
    table.boxresults td {
        border: 1px solid #999;
        border-width: 0px 1px 0px 0px;
        padding: 2px 7px 2px 7px;
    }
    table.boxresults th {
        text-align: center;
        font-size: 1.1em;
        border: 1px solid #444;
        border-width: 0px 0px 1px 0px;
    }
    table.boxresults td.browser {
        text-align: right;
    }
    </style>
    
    <table class='boxresults'>
    <tr>
    <th></th><th>Tables</th> <th>Box</th> <th>Flex</th> <th>Phosphor</th>
    </tr><tr>
    <td class='browser'>Firefox 35:</td> <td>Ok (1FPS)</td> <td>Ok (20FPS)</td> <td>Ok (10FPS)</td> <td>Ok (3FPS)</td>
    </tr><tr>
    <td class='browser'>Chromium 40:</td> <td>Fail (4FPS)</td> <td>Ok (45FPS)</td> <td>Ok (40FPS)</td> <td>Ok (45FPS)</td>
    </tr><tr>
    <td class='browser'>Qt Webkit:</td> <td>Fail</td> <td>Ok </td> <td>Ok </td> <td>Fail</td>
    </tr><tr>
    
    <td class='browser'>Iceweasel (RaspPI):</td> <td>Fail</td> <td>Ok </td> <td>Ok </td> <td>Ok</td>
    </tr><tr>
    <td class='browser'>Ephiphany (RaspPI):</td> <td>Fail</td> <td>Ok </td> <td>Ok </td> <td>Ok</td>
    </tr><tr>
    <td class='browser'>Chromium (RaspPI):</td> <td>Fail</td> <td>Ok </td> <td>Ok </td> <td>Fail</td>
    </tr><tr>
    
    <td class='browser'>Firefox (mobile):</td> <td>Ok</td> <td>Ok </td> <td>Ok </td> <td>Ok</td>
    </tr><tr>
    <td class='browser'>Standard Android (mobile):</td> <td>Fail</td> <td>Ok </td> <td>Fail </td> <td>Fail</td>
    </tr><tr>
    
    <td class='browser'>IE 9:</td> <td>Fail</td> <td>Fail</td> <td>Fail</td> <td>Fail</td>
    </tr><tr>
    <td class='browser'>IE 10:</td> <td>?</td> <td>?</td> <td>?</td> <td>?</td>
    </tr><tr>
    <td class='browser'>IE 11:</td> <td>?</td> <td>?</td> <td>?</td> <td>?</td>
    </tr>
    </table>

Notes:

* I developed the table-method with Firefox, I'm pretty sure it can be made to work
  with other browsers.
* On QtWebkit, the FPS measurement did not work. Both Box and Flex seemed smooth though.
* Chrome does not resize the content until you release the mouse. I used developer mode
  to resize, but then you can only resize either width or height.
* On Raspberry Pi, all browsers do not resize the content until you release the mouse.


Conclusions
===========

I was unpleasantly surprised by the horrible performance of the
table-based method. I suppose you should just avoid that. 

It's good to see that the Box method is so well supported. It's sort
of deprecated though, so I want to avoid it. After getting the CSS right
with the Flex method (you have to be consistent with the '-webkit',
'-moz', '-ms' prefixes), I was pleasantly surprised to see it working
on a wide range of browsers, inluding those running on the Raspberry
Pi.

The Phosphor method (using JS) seems to not work as expected. Maybe I
am using it wrong (there's not a lot of docs yet), but I also suspect
its just not finished yet. One thing that I am worried about with this
approach is that although the optimal/minumum width of a widget can be
calculated from the text, I wonder it its possible to do so for the
height. The widget that includes multiple lines and an image fails for
this method.
