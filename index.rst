
.. title:: Zoof

.. container:: splash

    .. image:: _static/zooflogo220.png
        :align: center
    
    .. raw:: html
        
        <!-- The briefest summary for Zoof --!>
        Zoof - download, run, start coding!
        <br />
        
        <!---
        <i class="fa fa-download"></i> Download &nbsp;&nbsp;
        <i class="fa fa-play-circle"></i> Run &nbsp;&nbsp;
        <i class="fa fa-child"></i> Coding!
        --!>

----

.. container:: purpose
    
    .. The brief summary for Zoof
        Zoof is a simple and intuitive IDE that promotes a powerful
        interactive workflow to use dynamic languages like Python, and helps
        you get started quickly.
    
    
    .. The summary for Zoof
    The purpose of Zoof is to lower the barriers for (scientific)
    computing by providing a simple and intuitive IDE that promotes a
    powerful interactive workflow to use dynamic languages like Python.
    Getting started is as easy, since Zoof can take care of
    installing the programming language and additional packages.
    
    We believe that making (scientific) computing easier accessible is
    an important step to make science more reproducable, and has the
    potential to empower people.


Features
--------

(These are the features that Zoof will have, but we are just starting, see below)

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
      Run code from file, cell or selected lines with a single key combi.
      Powerful introspection tools like autocompletion, call tips,
      interactive docs, and workspace. 
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-thumbs-up"></i> Modern</h4>
      Preserve state accross sessions, smart-open instead of tabs. No 
      more saving or closing of files, and more. (Some of these features will
      be experimental at first.)
    </div>
    
    <div class="col-md-4 col-sm-6">
      <h4><i class="fa fa-remove"></i> Cross platform</h4>
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
      <h4><i class="fa fa-beer"></i> Always free</h4>
      Zoof is free and always will be. To make Zoof sustainable, we sell the 
      Zoof Plus edition. The extra features in Plus are of cosmetic nature;
      the free version has no restrictions in functionality.
    </div>
    
    </div>


Status 
------

Zoof can be seen as the successor of `IEP <http://www.iep-project.org/>`_ and 
`Pyzo <http://www.pyzo.org/>`_, combining the two projects into a single
application. We start with a clean sheet and build Zoof up while trying
to reuse as much code from the former projects as we can. You can see
the progress at `our github repo <http://github.com/zoofIO/zoof/>`_. 

The design of Zoof will also be more modular than IEP, and we will come
with a well-documented public API, so that it is easy to create
extensions and contribute new features.


Details
-------

This is the premise: To get started, download Zoof and start it up, set
up an environment with the language of your choice, and start coding.
An intuitive interface will guide novel users through the process, and
will provide tutorial materials if necessary. At the same time, the
interface does not get in the way and is powerful enough to support the
workflow of advanced programmers.

Zoof supports multiple progamming languages, focusing on dynamic
languages (that support the interactve work flow of Zoof). At first we
will focus on Python and Julia, and other languages can be added via
an extension mechanism. Over time the languages that Zoof natively
supports will be increased.

Like IEP, Zoof will be available in multiple (natural) languages. Let
us know if you want to help with the translations!

Zoof will probably support two ways to provide kernels. On the one hand
we will piggy-back on the kernel mechanisms of project Jupyter (formerly
IPython). On the other hand, we are developing protocols that are
aimed to be easy to implement in any dynamic language, do not have much
dependencies. Therefore, making Zoof work with a new language should
be quite simple. Imagine building a toy language with LLVM and being
able to target it from Zoof by spending one day implementinging a few
simple protocols.

Zoof uses `Conda <http://conda.pydata.org/>`_ to spawn and manage new
environments. This is already functional for Python. Via 
`Binstar <http://binstar.org/>`_ it will be straightforward to allow Zoof
to spawn other languages as well.


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
* No more tabs, only one file is "open" at a time. There is no concept of saving
  or closing a file, yet the state of each file opened is preserved once you
  re-open it, including the undo stack. Open/select a file by typing in a 
  text field, which will smartky suggest recent files and files that match
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
  keyboard shortcuts to help users adopt an effective workflow.
* A generic tooltip of sorts to provide extra information on menu items
  and any kind of user-settable. This should help keep the UI simple
  and consise while making it easy to get more information when needed. How the
  infotmation is displayed is yet to be determined.
* Source structure tool (like IEP has) is shown in the editor itself and is
  only shown when ALT (or another key?) is pressed down. This should
  reduce clutter while still making it easy to get an overview of your
  code. Will need to see how this works out in practice though.
* Concept of "pages". Much functionality is provided via pages that are

  displayed in the area whereyour code is normally displayed. E.g.
  configuration options can be accessed by selectig "zoof:config" as a
  "file name". This reduced the amount of dialogs popping up, and makes
  Zoof very extendable. Common pages can easily be loaded via a menu
  option.
* The start page (which can be accessed using a single click, provides a quick
  way to common tasks, like launching and managing environments, etc.
* Zoof will get an extension mechanism to make it easy to register extenstions
  that provide new pages, tools, and other functionality to customize Zoof
  to your needs.
  

.. toctree::
   :maxdepth: 2