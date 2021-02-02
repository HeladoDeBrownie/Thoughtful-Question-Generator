#lang racket
(require
  jen
  "favorite.rkt"
  "fixed.rkt"
  "pet.rkt"
  "superpower.rkt")

(define-rule start
  (~> (favorite:start))   #:weight 2
  (~> (pet:start))        #:weight 2
  (~> (superpower:start)) #:weight 2
  (~> (fixed:start))      #:weight 1)

(module+ main
  (with-handlers
      ; If any exception occurs, print fallback text to standard output but
      ; allow the exception to propagate.
      (((const #t)
        (λ (x)
          (displayln "Oops, I forgot how to think!")
          (raise x))))
    (displayln (start))))