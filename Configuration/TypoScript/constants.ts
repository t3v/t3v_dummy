# -----------------------
# | T3v Dummy Constants |
# -----------------------

# === Plugin Constants ===

plugin {
  tx_t3vdummy {
    persistence {
      # cat=plugin/tx_t3vdummy/persistence; type=boolean; label=Enables the automatic cache clearing when changing data sets
      enableAutomaticCacheClearing = 1

      # cat=plugin/tx_t3vdummy/persistence; type=int+; label=The PID of the storage
      storagePid = 0

      # cat=plugin/tx_t3vdummy/persistence; type=boolean; label=Updates reference index to ensure data integrity
      updateReferenceIndex = 1
    }

    settings {
      # ...
    }

    view {
      # cat=plugin/tx_t3vdummy/view; type=string; label=The path where the layouts are stored
      layoutRootPath = EXT:t3v_dummy/Resources/Private/Layouts/

      # cat=plugin/tx_t3vdummy/view; type=string; label=The path where the templates are stored
      templateRootPath = EXT:t3v_dummy/Resources/Private/Templates/

      # cat=plugin/tx_t3vdummy/view; type=string; label=The path where the partials are stored
      partialRootPath = EXT:t3v_dummy/Resources/Private/Partials/
    }
  }
}