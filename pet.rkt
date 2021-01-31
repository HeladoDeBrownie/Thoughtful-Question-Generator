#lang racket
(require jen)
(provide (prefix-out pet: (all-defined-out)))

(define animal-category (make-rule-parameter #f))

(define-rule start
  (~> "Would you rather have " (an-animal) " or " (an-animal) " as a pet?"))

(define-rule an-animal
  ; Always choose only usual animals or only unusual animals.

  (~>
   (need (or (equal? (animal-category) 'usual) (not (animal-category))))
   (animal-category 'usual)
   (a-usual-animal))
  #:weight 8

  (~>
   (need (or (equal? (animal-category) 'unusual) (not (animal-category))))
   (animal-category 'unusual)
   (an-unusual-animal))
  #:weight 1)

(define-rule a-usual-animal
  (~> (a-bird))
  (~> (a-mammal))
  (~> (another-usual-animal)))

(define-rule a-bird
  (~> (once) "a cockatiel")
  (~> (once) "an owl")
  (~> (once) "a parrot"))

(define-rule a-mammal
  (~> (a-cat))
  (~> (once) "a dog")
  (~> (once) "a hamster")
  (~> (once) "a horse"))

(define-rule a-cat
  (~> (once) "a cat") #:weight 10
  (~> (once) "a lion")
  (~> (once) "a tiger"))

(define-rule another-usual-animal
  (~> (once) "a fish")
  (~> (once) "a snake")
  (~> (once) "a tarantula"))

(define-rule an-unusual-animal
  (~> (a-dinosaur))
  (~> (a-mythical-creature)))

(define-rule a-dinosaur
  (~> (once) "a pterodactyl")
  (~> (once) "a stegosaurus")
  (~> (once) "a velociraptor"))

(define-rule a-mythical-creature
  (~> (once) "a dragon")
  (~> (once) "a phoenix")
  (~> (once) "a unicorn")
  (~> (once) "a yeti"))

(module+ main
  (displayln (start)))