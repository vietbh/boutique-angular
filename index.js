let app = angular.module('myApp',[]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", { templateUrl: "view/main.html", controller: "monHoc" })
        .when("/dangnhap", { templateUrl: "view/dangnhap.html", controller: "formDN" })
        .when("/lienhe", { templateUrl: "view/lienHe.html", controller: "" })
        .when("/dangki", { templateUrl: "view/dangKi.html", controller: "formDK" })
        .when("/doimatkhau", { templateUrl: "view/doimatkhau.html", controller: "doimatkhau" })
        .when("/tracnghiem/:idMH/:tenMH", { templateUrl: "view/Pagetracnghiem.html", controller: 'tnctrl' })
        .when("/:ten", { templateUrl: "view/gioithieu.html", controller: "hientin" })
});
// 
app.controller(($routeProvider)=>{

});