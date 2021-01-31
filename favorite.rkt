#lang racket
(require jen)
(provide (prefix-out favorite: (all-defined-out)))

(define-rule start
  (~> "What is your favorite " (thing) "?"))

(define-rule thing
  (~> "color")
  (~> "genre of " (thing-with-genres))
  (~> "object")
  (~> "place"))

(define-simple-rule thing-with-genres
  "architecture"
  "art"
  "fashion"
  "film"
  "music"
  "novels"
  "tweets"
  "videogames")

(module+ main
  (displayln (start)))