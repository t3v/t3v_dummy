# === T3v Dummy Constants ===

plugin {
  tx_t3vdummy {
    persistence {
      # cat=plugin/tx_t3vdummy/persistence; type=int+; label=The PID of the storage
      # storagePid = 0
    }

    view {
      # cat=plugin/tx_t3vdummy/view; type=string; label=Path to layouts
      layoutRootPath = EXT:t3v_dummy/Resources/Private/Layouts/

      # cat=plugin/tx_t3vdummy/view; type=string; label=Path to templates
      templateRootPath = EXT:t3v_dummy/Resources/Private/Templates/

      # cat=plugin/tx_t3vdummy/view; type=string; label=Path to template partials
      partialRootPath = EXT:t3v_dummy/Resources/Private/Partials/
    }

    settings {
      # ...
    }
  }
}