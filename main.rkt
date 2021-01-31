#lang racket
(require
  jen
  "favorite.rkt"
  "pet.rkt")

(define-rule start
  (~> (favorite:start))
  (~> (pet:start)))

(module+ main
  (with-handlers
      ; If any exception occurs, print fallback text to standard output but
      ; allow the exception to propagate.
      (((const #t)
        (λ (x)
          (displayln "Oops, I forgot how to think!")
          (raise x))))
    (displayln (start))))