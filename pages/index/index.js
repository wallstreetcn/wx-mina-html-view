const parseHtml = require('../../html-view/index')

Page({
  data: {
    html: ''
  },

  onLoad() {
    const html = `
      <p>
        This is the first paragraph of text.<br>
        This is the first paragraph of text😂.
        This is the first paragraph of text &gt; &lt;.<br><br>
        This is the first paragraph of text.
      </p>


      <blockquote>
        This is the second paragraph.
        This is the second paragraph.
        This is the second paragraph.
        This is the second paragraph.
      </blockquote>

      <p>
        According to Mozilla's website, <q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0 was released in 2004 and became a big success.</q>
      </p>

      <hr>

      <h1>Heading level 1</h1>
      <h2>Heading level 2</h2>
      <h3>Heading level 3</h3>
      <h4>Heading level 4</h4>
      <h5>Heading level 5</h5>
      <h6>Heading level 6</h6>

      <img src="https://static.mengniang.org/common/7/7e/2-16031Q11945117.png">
      <p>(https://zh.moegirl.org/zh-hans/%E9%98%BF%E5%BA%93%E5%A8%85)</p>


      <video src="http://mvvideo11.meitudata.com/58401926e8aad3470.mp4"></video>
      <p>(http://www.meipai.com/media/618289646)</p>

      <p>Use &lt;source&gt;</p>
      <video>
       <source src="http://mvvideo11.meitudata.com/58401926e8aad3470.mp4" type="video/mp4">
      </video>

      <audio src="http://www.tingge123.com/mp3/2016-04-16/1460775737.mp3"></audio>
      <p>(http://www.tingge123.com/qqmusic/d14370.html)</p>

      <table>
        <tr>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
        </tr>
      </table>

      <p>Simple table with header</p>
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
        </tr>
      </table>

      <p>Table with thead, tfoot, and tbody</p>
      <table>
        <thead>
          <tr>
            <th>Header content 1</th>
            <th>Header content 2</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
          </tr>
        </tbody>
      </table>

      <p>Simple table with caption</p>
      <table>
        <caption>Awesome caption</caption>
        <tr>
          <td>Awesome data</td>
        </tr>
      </table>
    `

    this.setData({ html: parseHtml(html) })

    console.log(this.data.html) // eslint-disable-line
  }
})
