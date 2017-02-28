#include <iostream>

using namespace std;
void sorted(int arr[],int array_size)
{
bool flag=true;
  int counter=0;
  int first_index=0;
  int second_index =1;
  /*Temp is used for both bubble sorting and selection sorting*/
  int temp=0;
while(flag)
   {
       if(second_index<array_size)
       {
           if (arr[first_index]>arr[second_index])
           {
                  //swap
                  temp=arr[first_index];
                  arr[first_index]=arr[second_index];
                  arr[second_index]=temp;
                  /*Reset counter*/
                  counter=0;
           }
           else
           {
               /*increment counter when first element is < second_element*/
                counter+=1;

           }
           /*increments first_index and second_index*/
               first_index+=1;
               second_index+=1;
       }//end mother if 1
    else if(arr[second_index]>array_size-1)
        {
        //if it reaches 4 reset index.
       first_index=0;
        second_index =1;
       }
//if all elements are arranged stop.
      if(counter>array_size-1)
      {
        flag=false;
      }//end of second if.
}
}


int main()
{

    int lookFor=13;


    int index=0;
    bool found=true;
    int listed[6]={2,34,13,4,23,1};
    sorted(listed,6);
    int mid=6/2;
    int midPoint=listed[mid];
    if (lookFor==midPoint)
    {
        index=mid;
        found=true;

    }
    else if (lookFor<midPoint)
    {
        for (int i=0; i<mid; i++)
        {
            if (lookFor==listed[i])
            {
                index=i;
              found=true;
              break;
            }
            else
                found=false;
        }
    }
    else if (lookFor>midPoint)
    {
        for (int i=mid; i<6; i++)
        {
            if (lookFor==listed[i])
            {
                index=i;
                found=true;
                break;
            }
            else
                found=false;
        }
    }
if (found)
{
    cout<<"Found at index "<<index;
}
else
    cout<<"Not Found"<<endl;
    return 0;
}
