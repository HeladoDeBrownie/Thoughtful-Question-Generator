#lang racket
(require jen)
(provide (prefix-out superpower: (all-defined-out)))

(define-rule start
  (~> "Would you rather be able to " (superpower) " or " (superpower) "?"))

(define-rule superpower
  (~> (usual-superpower))   #:weight 10
  (~> (unusual-superpower)) #:weight 1)

(define-rule usual-superpower
  (~> (once) "breathe fire")
  (~> "communicate verbally with " (animals))
  (~> (once) "fly")
  (~> (once) "move objects with your mind")
  (~> (once) "read minds")
  (~> (once) "shapeshift")
  (~> (once) "speak any human language")
  (~> (once) "teleport")
  (~> (once) "turn invisible"))

(define-rule animals
  (~> (once) "bugs")
  (~> (once) "cats")
  (~> (once) "dogs")
  (~> (once) "fish")
  (~> (once) "snakes"))

(define-rule unusual-superpower
  (~> (once) "accurately draw anything you can see")
  (~> (once) "charge electronics with your body")
  (~> (once) "make authentic-sounding dubstep noises")
  (~> (once) "see in all directions at once")
  (~> (once) "take flawless selfies every time")
  (~> (once) "tell whenever someone is talking about you")
  (~> (once) "think of the perfect comeback in any situation"))

(module+ main
  (displayln (start)))