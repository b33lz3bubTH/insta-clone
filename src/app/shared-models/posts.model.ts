
class Comment{
   commentPassed:string;
   commentedBy:string;
   constructor(com, by){
      this.commentPassed = com;
      this.commentedBy = by;
   }
}

export class UserPost{
   username: string;
   postid: string;
   postLink: string;
   totalLikeCount: number;
   postTitle: string;
   postDescription : string;
   hasLiked: boolean;
   hasCommented:Comment[];
   constructor(username,postid,postLink,totalLikeCount,postTitle, postDescription, hasLiked){
      this.postid = postid;
      this.username = username;
      this.postLink = postLink;
      this.totalLikeCount = totalLikeCount;
      this.postTitle = postTitle;
      this.postDescription = postDescription;
      this.hasLiked = hasLiked;
   }
   setCommentOnPost(userCommenting, commentString){
      (this.hasCommented == null)?this.hasCommented = []:console.log(); //working as of now, should be better in future.
      this.hasCommented.push(new Comment(commentString,userCommenting) );
   }
}