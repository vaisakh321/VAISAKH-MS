from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
count = 0
def index(request) :
    global count
    count += 1
    my_dict = { 'inject_var' : count}
    evenOrOdd = count % 2
    my_dict['evenOrOdd'] = evenOrOdd
    fruitList = ['Mango', 'Banana',  'Apple','Gauva']
    my_dict['fruits'] = fruitList
    return render(request,'index.html',context=my_dict)

def index1(request) :
    return render(request,'help.html')