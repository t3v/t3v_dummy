<?php
defined('TYPO3_MODE') or die();

// === Variables ===

$namespace          = 't3v';
$extensionKey       = $_EXTKEY;
$extensionSignature = \TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($namespace . '.' . $extensionKey);
$configuration      = "EXT:{$extensionKey}/Configuration";
$resources          = "EXT:{$extensionKey}/Resources";