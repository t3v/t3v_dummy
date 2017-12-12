<?php
$EM_CONF[$_EXTKEY] = [
  'title' => 'T3v Dummy',
  'description' => 'The TYPO3Voila extension dummy.',
  'author' => 'Maik Kempe',
  'author_email' => 'mkempe@bitaculous.com',
  'author_company' => 'Bitaculous - It\'s all about the bits, baby!',
  'category' => 'example',
  'state' => 'stable',
  'version' => '2.1.0',
  'createDirs' => '',
  'uploadfolder' => false,
  'clearCacheOnLoad' => false,
  'constraints' => [
    'depends' => [
      'typo3' => '7.6.0-8.7.99',
      't3v_core' => ''
    ],
    'conflicts' => [
    ],
    'suggests' => []
  ],
  'autoload' => [
    'psr-4' => [
      'T3v\\T3vDummy\\' => 'Classes'
    ]
  ],
  'autoload-dev' => [
    'psr-4' => [
      'T3v\\T3vDummy\\Tests\\' => 'Tests'
    ]
  ]
];