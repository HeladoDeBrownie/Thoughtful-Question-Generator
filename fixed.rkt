#lang racket
(require jen)
(provide (prefix-out fixed: (all-defined-out)))

(define-simple-rule start
  "If you could have one superpower, what would it be?"
  "What is your favorite Jazz Mickle album?")

(module+ main
  (displayln (start)))