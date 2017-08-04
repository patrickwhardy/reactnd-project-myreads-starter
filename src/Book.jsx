import React, { Component } from 'react';

class Book extends Component {
//   
// allowAnonLogging: true
// authors: Array(1)
// averageRating: 4
// canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ"
// categories: Array(1)
// contentVersion: "1.2.2.0.preview.2"
// description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin""
// id: "nggnmAEACAAJ"
// imageLinks: Object
// industryIdentifiers: Array(2)
// infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 480
// panelizationSummary: Object
// previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2012"
// publisher: "No Starch Press"
// ratingsCount: 2
// readingModes: Object
// shelf: "currentlyReading"
// subtitle: "A Complete Introduction"
// title: "The Linux Command Line"
  render () {
    console.log(this.props.book)
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">Harper Lee</div>
      </div>
    )
  }
}

export default Book
