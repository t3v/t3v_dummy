<?php
defined('TYPO3_MODE') or die();

// === Variables ===

$extensionKey   = 't3v_dummy';
$extensionTitle = 'T3v Dummy';

// === TypoScript ===

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extensionKey, 'Configuration/TypoScript', $extensionTitle);
