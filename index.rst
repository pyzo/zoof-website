
.. title:: Zoof


.. raw:: html

    </div></div></div>
    
    <div class='splash'>
    
    <!-- Undo divs that the template prepared -->
    <div class="container">
    <div class="row">
    
    <!-- Maintain compact width -->
    <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
    
    <center><img src="_static/zooflogo220.png" /></center>
    
    <!-- The briefest summary for Zoof -->
    <div class="shortest-summary">
    Zoof - download, run, start coding!
    </div>
    <br />
    
    <!---
    <i class="fa fa-download"></i> Download &nbsp;&nbsp;
    <i class="fa fa-play-circle"></i> Run &nbsp;&nbsp;
    <i class="fa fa-child"></i> Coding!
    -->

    <!-- The brief summary for Zoof 
    Zoof is a simple and intuitive IDE that promotes a powerful
    interactive workflow to use dynamic languages like Python, and helps
    you get started quickly.
    -->
    
    <!-- The purpose (long summary) of Zoof -->
    The purpose of Zoof is to lower the barriers for (scientific)
    computing by providing a simple and intuitive IDE that promotes a
    powerful interactive workflow to use dynamic languages like Python.
    Getting started is easy, since Zoof can take care of installing the
    programming language and additional packages.
    <br /> <br />
    We believe that making (scientific) computing easier accessible promotes
    freedom and independence, and is an important step to make science
    more reproducable.
    
    </div></div></div>
    </div> <!-- ex splash -->
    
    <div class="container">
    <div class="row">
    <div class="col-md-12">


Features
--------


(These are the features that Zoof *will* have, see status below)

.. raw:: html
    
    <div class="row">
    
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-rocket"></i> Get going quickly</h4>
      With Zoof you can use programming languages that are already
      installed, or you can easily spawn a new environment.
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-child"></i> Intuitive</h4>
      Zoof minimizes clutter and provides information when the user needs
      it. The tip system will help you adopt an efficient workflow
      without getting in the way.
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-refresh"></i> Highly interactive</h4>
      Run code from file, cell or selected lines with a single key combination.
      Make use of powerful introspection tools like autocompletion, call tips,
      interactive docs, and workspace. 
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-thumbs-up"></i> Modern</h4>
      Preserve state accross sessions, smart-open instead of tabs. No 
      more saving or closing of files, and more. (Some of these features will
      be experimental at first.)
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-desktop"></i> Cross platform</h4>
      Zoof is available on Windows, Linux and OS X. Binaries/installers
      are provided for each platform. Zoof also runs on the Raspberry Pi!
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-plug"></i> Extensible</h4>
      Zoof provides a well-documented API and an extension system to allow
      others to write new functionality, tools, and support for new
      programming languages.
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-group"></i> Open source</h4>
      Zoof is free as in speech. Found a bug? Want a new feature? A
      translation for your mother tongue? You can contribute to the
      improvement of Zoof. The quality of our code is maintained by CI
      that verifies our unit tests and style.
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-heart"></i> Always free</h4>
      We believe that everyone should have access to good tools: Zoof is
      free and always will be. The extra features in Zoof Plus are of
      cosmetic nature, the free version has no restrictions in
      functionality.
    </div>
    
    </div>


Status 
------

Zoof is just getting started ...

Zoof can be seen as the successor of `IEP <http://www.iep-project.org/>`_ and 
`Pyzo <http://www.pyzo.org/>`_. Although quite successful, it's time
to move things to the next level. Zoof essentially combines the two projects
in as single application. Further, we want to open up to other dynamic
programming languages, and we want to make the user interface more
intuitive and modern.

We start with a clean sheet, allowing us to lay a strong foundation
with a modular design, a well-documented public API, unit-tests, and
approporate coding style. From there we include the pieces from IEP and
Pyzo, while adapting them to the Zoof's design principles. Along the
way, some functionality will be replaced by modern features (see below).
With this approach we think that we can get Zoof ready to roll in a
relative short amount of time, while achieving a healthy code-base for
future development. You can see the progress at 
`our github repo <http://github.com/zoofIO/zoof/>`_.


Details
-------

Here is the main idea of Zoof: Download Zoof and start it up, set
up an environment with the language of your choice, and start coding.
An intuitive interface will guide novel users through the process, and
will provide tutorial materials if necessary. At the same time, the
interface does not get in the way and is powerful enough to support the
workflow of advanced programmers.

Zoof supports multiple progamming languages, focusing on dynamic
languages (which support the interactve work flow of Zoof). At first we
will focus on `Python <http://python.org/>`_ and 
`Julia <http://julia-lang.org/>`_, and other languages can be added via
an extension mechanism. Over time the languages that Zoof natively
supports will be increased.

Like IEP, Zoof will be available in multiple (natural) languages. Let
us know if you want to help with the translations!

Zoof will probably support two ways to provide kernels. On the one hand
we will piggy-back on the kernel mechanisms of 
`project Jupyter <http://jupyter.org/>`_ (formerly IPython). On the
other hand, we are developing protocols that are aimed to be easy to
implement in any dynamic language, and have few dependencies.
Therefore, making Zoof work with a new language should be quite simple.
Imagine building a toy language with LLVM and being able to target it
from Zoof by spending one day implementinging a few simple protocols.

Zoof uses `Conda <http://conda.pydata.org/>`_ to spawn and manage new
environments. Conda already provides full-fledged support for several
version of the Python programming language. Via 
`Binstar <http://binstar.org/>`_ it will be straightforward to allow Zoof
to spawn other languages as well.


Testimonials
------------

Some encouraging `testimonials <http://www.iep-project.org/#testimonials>`_ from IEP
and Pyzo:
    
.. raw:: html
    
    <i class='fa fa-quote-left fa-1x pull-left'></i>
    This is fantastic IDE - exactly what I was looking for! 
    <br /><br />
    
    <i class='fa fa-quote-left fa-1x pull-left'></i>
    For quite a while now I’ve been looking for a way to switch from
    Matlab to Python. The last remaining problem was a lack of descent
    IDE for interactive work. I do a lot of short calculations, so a
    ‘cell’ execution mode is crucial for me. Thanks again for a great
    project! 
    <br /><br />
    
    <i class='fa fa-quote-left fa-1x pull-left'></i>
    I don’t even remember how I found IEP, so confused and desperate I
    was testing [all available IDE’s] I could find. Installed it, and
    10 minutes later I was coding, connecting with a glade created user
    interface, and everything is running so well. I ain’t gonna change
    now. IEP is my choice. Thank you very much, and keep up this amazing
    work.
    <br /><br />
    
    <i class='fa fa-quote-left fa-1x pull-left'></i>
    What I like especially of iep is the plain and simple design of the
    UI (a Qt feature :) while providing really powerful functionality.
    Please, keep this project running.
    <br /><br />
    
    <i class='fa fa-quote-left fa-1x pull-left'></i> 
    It’s performing beautifully, the UI is very intuitive and stylish
    (to my eyes anyway). [...] This is a very impressive app, on OSX
    close to alpha dog status (I’ve used ALL the OSX alternatives). 
    <br /><br />


Modern features
---------------

There are some features that we plan on incorporating (or at least
experiment with). The details need to be worked out, and much is still up
for discussion:

* Once Zoof has started, most interaction with the file system will be
  done via a proxy that runs in a dedicated thread, so that Zoof remains
  responsive even if your hard drive is busy. This is already implemented in
  IEP's file browser tool. This approach can later be extended to transparently
  map remote file systems (e.g. cloud computing).
* No more tabs, only one file is "open" at a time. Begone with the
  old-fashioned concept of unsaved files. Just edit each file directly.
  The state of each file (cursos position, undo, etc.) is preserved once you
  re-open it. Open/select a file by typing in a 
  text field, which will smartly suggest recent files and files that match
  the part of the file name that you wrote. The idea is similar to
  Sublime's "open anything" and Zed's method for opening files. Don't
  worry, we will also include IEP's powerful file browser that has
  support for filename filters and search.
* No more menu bar. Each component of Zoof has its own small menu that only
  lists functionality specific to that component. Instead of searching for 
  functionality in the global menu, you simply select the menu of the component
  to whoch the required functionality applied.
* A generic "tip" mechanism to guide novel users in using Zoof, that is easily
  put out of the way when (no longer) needed. Also give hints about
  keyboard shortcuts to help users adopt an effective workflow. The
  same system provides extra information on menu items and
  user-settings. This should help keep the UI simple and clutter-free
  while making it easy to get more information when needed.
* Source structure tool (like IEP has) is shown in the editor itself and is
  only shown when ALT (or another key?) is pressed down. This should
  reduce clutter while still making it easy to get an overview of your
  code. Will need to see how this works out in practice though.
* Concept of "pages". Much functionality is provided via pages that are
  displayed in the area where your code is normally displayed. E.g.
  configuration options can be accessed by selectig "zoof:config" as a
  "file name". This reduces the amount of dialogs popping up, and makes
  Zoof very easy to extend. Common pages can easily be loaded via a menu
  option.
* The start page (which can be accessed using a single click) provides a quick
  way to common tasks, like launching and managing environments.
* Zoof will get an extension mechanism to make it easy to register extenstions
  that provide new pages, tools, and other functionality to customize Zoof
  to your needs.


.. toctree::
   :maxdepth: 2