from _typeshed import Self


class Solution:
    def solve(self,N,A):
        #code here
       mxscore = - 1e18;
       for k in range(1,N+1):
           score=0;
           for i in range(k-1,N,k):
               score+=A[i];
           if(score > mxscore):
               mxscore = score;
               ans = k;
       return ans;

print(Solution.solve(1,6, [4, 6, 8, 9,0, 7]))