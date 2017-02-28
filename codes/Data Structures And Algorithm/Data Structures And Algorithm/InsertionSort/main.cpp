#include <iostream>
#include <vector>

using namespace std;

int main()
{
   int unsorted[10]={4,3,23,2,1,34,21,35,4,67};
   //int sorted[5];
  // vector <int> sorted(2);
   int sorted[10];

   int index=0;

   //take first element and put it in sorted.
   sorted[0]=unsorted[0];
   /**********************************/
 for (int i=1; i<10; i++)
   {
       for (int u=index; u>=0; u--)
       {
            if (unsorted[i]<sorted[u])
            {
                //insert in front of element
                sorted[u+1]=sorted[u];
                sorted[u]=unsorted[i];
                continue;
            }
            else

            {
                //insert or add
                sorted[u+1]=unsorted[i];
                break;
            }
       }

         index+=1;
   }


   /*sorted.push_back(67);
   sorted.push_back(7);
   sorted.push_back(100);*/
//   int vectsize=sorted.size(); //size of vector
   for (int i=0; i<10; i++)
   {
        cout<<endl<<sorted[i];
   }

    return 0;
}
