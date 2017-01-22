const HtmlParser = require('../../html-view/index')
const qiniuImg = require('../../html-view/each/qiniuImg')
const resolveAnchor = require('../../html-view/each/resolveAnchor')

Page({
  data: {
    html: ''
  },

  onLoad() {
    const htmlString = `
      <p>
        This is the first paragraph of text.<br>
        This is the first paragraph of text😂.
        This is the first paragraph of text &gt; &lt;.<br><br>
        This is the first paragraph of text.
      </p>

      <p>
        <a href="/foo?a=123">/foo?a=1</a><br><br>
        <a href="/bar/456?token=abc">/bar/456?token=abc</a><br><br>
        <a href="https://www.google.com">https://www.google.com</a>
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

      <p>
        <img src="https://static.mengniang.org/common/7/7e/2-16031Q11945117.png"><br>
        (https://zh.moegirl.org/zh-hans/%E9%98%BF%E5%BA%93%E5%A8%85)
      </p>

      <p>
        七牛imageView2:<br>
        <img src="https://ocpk3ohd2.qnssl.com/uploads/image/file/12/71/1271db28b9dc056ce53d7889b5f8097d.jpg"><br>
        (http://dn-geekpark-new.qbox.me/topics/215301)
      </p>


      <p>
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video><br>
        (http://camendesign.com/code/video_for_everybody/test.html)
      </p>

      <p>
        Use &lt;source&gt;<br>
        <video>
        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
        </video>
      </p>

      <p>
        <audio src="http://www.tingge123.com/mp3/2016-04-16/1460775737.mp3"></audio><br>
        (http://www.tingge123.com/qqmusic/d14370.html)
      </p>

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

    const html = new HtmlParser(htmlString, { baseUrl: 'https://www.example.com' })
      .each(qiniuImg('qnssl.com'))
      .each(resolveAnchor('www.example.com', [
        ['/foo', '/pages/foo/index'],
        ['/bar/:id', '/pages/bar/index']
      ])).nodes
    this.setData({ html })

    console.log(this.data.html) // eslint-disable-line
  }
})
