
import os
import shutil

import sphinx
from PySide import QtCore, QtGui, QtWebKit

THISDIR = os.path.abspath(os.path.dirname(__file__))
OUTDIR = os.path.join(THISDIR, '_build', 'html')

class WebSiteTester(QtGui.QWidget):
    
    def __init__(self):
        QtGui.QWidget.__init__(self, None)
        
        self._browser = QtWebKit.QWebView()
        self._browser.load(os.path.join(OUTDIR, 'index.html'))
        
        self._but1 = QtGui.QPushButton('Build + Reload', self)
        self._but2 = QtGui.QPushButton('Clean + Build + Reload', self)
        self._but1.clicked.connect(self._reload1)
        self._but2.clicked.connect(self._reload2)
        
        layout = QtGui.QVBoxLayout(self)
        self.setLayout(layout)
        sublayout = QtGui.QHBoxLayout()
        #
        sublayout.addWidget(self._but1, 1)
        sublayout.addWidget(self._but2, 1)
        #
        layout.addLayout(sublayout, 0)
        layout.addWidget(self._browser, 1)
    
    def _reload1(self, clean=False):
        self._but1.setEnabled(False)
        self._but2.setEnabled(False)
        app.flush(); app.processEvents(); app.processEvents()
        if clean:
            shutil.rmtree(OUTDIR)
        sphinx.build_main(['', THISDIR, OUTDIR])
        self._browser.reload()
        self._but1.setEnabled(True)
        self._but2.setEnabled(True)
    
    def _reload2(self):
        self._reload1(True)


if __name__ == '__main__':
    app = QtGui.QApplication([])
    w = WebSiteTester()
    w.show()
    app.exec_()

##
