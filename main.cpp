#include <iostream>
using namespace std;


int main(){
    string city = {""};
    string pet_name = {""};
    cout << "Welcome to the Band name Generator." << endl;
    cout << "What's the name of the city you grew up in?" << endl;
    cin >> city;
    cout << "What's the name of your pet?" << endl;
    cin >> pet_name;
    cout << "Your band name could be " + city + " " + pet_name;

    return 0;
}