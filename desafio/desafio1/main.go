package main

import (
	"io"
	"net/http"
)

func main() {
	http.HandleFunc("/", hero)
	http.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("./assets"))))
	http.ListenAndServe(":8000", nil)
}

func hero(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.WriteString(w, `<div style="background-image:url('/assets/97738.png');width:100%;height:100%; background-repeat:no-repeat;"><center><h1 style="color:White">Imersão Full Cycle</h1></center></div>`)
}