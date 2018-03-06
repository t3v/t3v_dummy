<?php
defined('TYPO3_MODE') or die();

// === Variables ===

$namespace          = 't3v';
$extensionKey       = $_EXTKEY;
$extensionSignature = \TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($namespace . '.' . $extensionKey);
$resources          = "EXT:${extensionKey}/Resources";