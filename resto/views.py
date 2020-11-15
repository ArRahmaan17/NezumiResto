from django.shortcuts import render

def index(request):
    context={
        'title':'Nezumi Resto',
        'nav':[
            ['/','Home'],
            ['/menu','Menu'],
            ['/pesanan','Pesanan'],
        ],
        'favicon':'about/img/logo.ico',
        'sosialmedia':[
            ['#','Our Facebook'],
            ['#','Our Instagram'],
            ['#','Our Twitter'],
        ],
        'branch':[
            ['Indonesia','Jakarta','Bandung','Surabaya','Yogyakarta','Bogor'],
            ['Singapore','Kampong Glam','Rochor','Jurong East','Novena','Paya Lebar'],
            ['Thailand','Bangkok','Chiang Mai','Pattaya','Ayutthaya','Kanchanaburi'],
        ]
    }
    return render(request,'index.html',context)
