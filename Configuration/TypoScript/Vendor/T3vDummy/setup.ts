# === T3v Dummy Configuration ===

plugin {
  tx_t3vdummy {
    persistence {
      enableAutomaticCacheClearing = 1

      updateReferenceIndex = 1

      # storagePid = {$plugin.tx_t3vdummy.persistence.storagePid}
    }

    view {
      layoutRootPath = {$plugin.tx_t3vdummy.view.layoutRootPath}

      templateRootPath = {$plugin.tx_t3vdummy.view.templateRootPath}

      partialRootPath = {$plugin.tx_t3vdummy.view.partialRootPath}
    }

    settings {
      # ...
    }
  }
}