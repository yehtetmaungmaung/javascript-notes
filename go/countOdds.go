package main

import (
	"fmt"
	"math"
)

func countOdds(low int, high int) float64 {
	count := math.Floor(float64(low+high) / 2)
	if low < 0 || high < 0 {
		fmt.Println("The values must be higher than 0")
		return -1
	} else if low == 0 {
		return count + 1
	}
	return count
}

func main() {
	fmt.Println(countOdds(0, 21))
}
