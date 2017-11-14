# ---------------------------
# | T3v Dummy Configuration |
# ---------------------------

# === Plugin Configuration ===

plugin {
  tx_t3vdummy {
    persistence {
      enableAutomaticCacheClearing = {$plugin.tx_t3vdummy.persistence.enableAutomaticCacheClearing}

      storagePid = {$plugin.tx_t3vdummy.persistence.storagePid}

      updateReferenceIndex = {$plugin.tx_t3vdummy.persistence.updateReferenceIndex}
    }

    settings {
      # ...
    }

    view {
      layoutRootPaths {
        0 = {$plugin.tx_t3vdummy.view.layoutRootPath}
      }

      templateRootPaths {
        0 = {$plugin.tx_t3vdummy.view.templateRootPath}
      }

      partialRootPaths {
        0 = {$plugin.tx_t3vdummy.view.partialRootPath}
      }
    }
  }
}