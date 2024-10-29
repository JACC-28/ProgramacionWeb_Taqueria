interseccion :: Eq a => [a] -> [a] -> [a]
interseccion [] _ = []
interseccion (x:xs) ys
    | n x ys = x : interseccion xs ys
    | otherwise = interseccion xs ys
  where
    n _ [] = False
    n a (y:ys)
      | a == y    = True
      | otherwise = n a ys

diferencia :: Eq a => [a] -> [a] -> [a]
diferencia [] _ = []
diferencia (x:xs) ys
    | n x ys = diferencia xs ys
    | otherwise     = x : diferencia xs ys
  where
    n _ [] = False
    n a (y:ys)
      | a == y    = True
      | otherwise = n a ys


contarMay :: String -> Int
contarMay [] = 0
contarMay (c:cs)
    | esMay c = 1 + contarMay cs
    | otherwise     = contarMay cs
  where
    esMay x = x >= 'A' && x <= 'Z'


longitud :: [a] -> Int
longitud [] = 0
longitud (_:xs) = 1 + longitud xs



























differencia :: Eq a => [a] -> [a] -> [a]
differencia xs ys = diff xs ys ++ diff ys xs
  where
    diff [] _ = []
    diff (x:xs) ys
      | n x ys = diff xs ys
      | otherwise = x : diff xs ys

    n _ [] = False
    n a (y:ys)
      | a == y = True
      | otherwise = n a ys

