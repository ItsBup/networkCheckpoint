export class Post {
  constructor (data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    this.createdAt = data.createdAt
    // this.formattedDate = this.formatDate(data.creator.createdAt)
    
  }
  // formatDate(date) {
  //   if (date instanceof Date) {
  //     return date.toLocaleDateString('en-US', {
  //       day: 'numeric',
  //       month: 'short',
  //       year: 'numeric',
  //     });
  //   } else {
  //     return 'Invalid Date';
  //   }
  // }
}
