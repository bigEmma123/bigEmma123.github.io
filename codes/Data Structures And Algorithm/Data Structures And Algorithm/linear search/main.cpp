#include <iostream>

using namespace std;

int main()

{
    int listed[6]={2,34,13,4,23,1};
int lookFor=13;
bool found=true;
int index=0;
for (int i=0; i<6; i++)
{
    if (lookFor==listed[i])
    {
        found=true;
        index=i;
        break;
    }
    else
        found=false;
}


if(found)
{
cout<<"The number was found at index "<<index;

}
else
    cout<<"Your number is not in the list"<<endl;
    return 0;
}
