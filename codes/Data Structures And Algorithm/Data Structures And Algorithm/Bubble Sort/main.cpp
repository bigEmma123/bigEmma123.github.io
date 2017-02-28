#include <iostream>

using namespace std;

int main()
{
   int numbers[8]={45,12,3,6,8,4,12,15};
   bool flag=true;
   int first_index=0;
   int second_index=1;
   int keepTrack=0;
   int temp=0;
  while(flag)
   {
       if(second_index<8)
       {
           if (numbers[first_index]>numbers[second_index])
           {
                  //swap
                  temp=numbers[first_index];
                  numbers[first_index]=numbers[second_index];
                  numbers[second_index]=temp;
                    keepTrack=0;
                  //cout<<"flag"<<flag<<endl;
                  //add flag
           }
           else
           {
                keepTrack+=1;

           }
           //increments
        first_index+=1;
        second_index+=1;
       }
    else if(numbers[second_index]>7)
        {
        //if it reaches 4 reset index.
       first_index=0;
        second_index =1;
       }
if(keepTrack>7)
{
    flag=false;
}


for(int i=0; i<8; i++)
{

    cout<<numbers[i]<<"   ";

}
cout<<endl;
}


    return 0;
}
