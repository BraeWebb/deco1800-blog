var postsSchema = {
    id: String,
    title: String,
    content: String,
    author: String,
    date: Date,
    background: String,
    tags: [String]
};

var posts = [
    {
        id: 'post1',
        title: 'Making the Blog',
        content: 'This blog post is intented *primarily* to test **markup** features of the blog site throughout construction.\n\r\n\rI have decided to create my own blogging platform because I would prefer to have control over what content I can and cannot publish to the blog and additionally what is displayed. Other blogging solutions seems too busy.\n\r\n\rThis blog should have features such as background images (as seen above), tags (as seen below), markup content generated from markdown and code segments as seen below.\n\r```public static void main(String[] args){\n\tSystem.out.println(\"Hello DECO1800 Blog!\");\n}```\n\rThe source code for this website will be published on my github when I get around to it and any other features that tutors think are required can always be requested and easily implmented.',
        author: 'BRAE',
        date: 1500982056,
        background: 'https://blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
        tags: ["deco1800", "blog", "testing"]
    },
    {
        id: 'post2',
        title: 'Going In..',
        content: 'Going into week 1 of DECO1800 is not something that I have been looking forward to. I have heard very positive things about the DECO2800 course from many people doing anything related to computer science at UQ. Unfortunately, in order to take DECO2800 I am required to do DECO1800 as I am not an engineer. I only hope that DECO2800 lives up to it’s reputation.\n\r\n\rThis course seems to be fairly straight forward, you create some sort of web application in a group and you document the process using a blog. For me, I have done a number of web application projects in the past which unfortunately makes this course seem a bit lacking in content. When I did DECO1400, I was severely uninterested in the design aspects of the course and was able to learn very little new information about front-end web development. My intent is not to sound rude but to illustrate what I expect to gain from this course.\n\r\n\nThe good news is that I believe this course can be helpful in experience in working in team projects as I have only developed in a maximum group of two in past projects.\n\r\n\rMy learning goals for this course is to learn how to effectively manage and work in a part of a team and perhaps learn a little bit more about the design aspects of web applications.\n\r\n\rI am worried about making blog posts as it is not something that I have done before, nor is it something that I have ever planned to do. I don’t see myself as a particularly good writer and will likely struggle to find the motivation to complete blog posts each week. However, I do see it as an opportunity to learn about the advantages of making a development blog.\n\r\n\r',
        author: 'BRAE',
        date: 1501323610,
        background: 'https://lh3.googleusercontent.com/GEYW1NAXH57mjgUm_v-nkvwf4VD7A812NiB-dLJ22hfbSoe5fhYtSGAO6FillpCIOlFAAsH_88C-Dz-ieFGvELuzMDpJ3Y2E4O-2GSsUQ2lnURryh-gc26lXtqSdEvlFmuImPLN3zyeP2Y9LRmLKXNJjeLqde-3bDozGpc7N3Og-HhqgWrVQ_Xhl6OUWZUErDjpwPOPDsWRtR6oKwDzd_euoysDta0_BYZN9oftGgRiZuMVy2ixyj3XkM_85-J9skAnWnHdhGBadCZ7XsrcPUiXkRWsXsfRMgqEH3nCDruZAYHIYld5ALrOsdHHLVXn8w8JMECH6tGT8ctCCin1tfC0B5xCUqYVH3u0a3v-FRWOaQNJ6980qvBGQCKKvpU0bfuqtl8c4oRG_jitsYxftwHMAGv3OZuT73ehpyurAeW01z6X3HpfBcqKRpae57EA8oSdyL9AeFTCAnRVdg9jEU9Z_M-CE8VGPB8syI7gKn7EqkhpMy2SgXttPx-k_DP7OdncpAWbT-KOi-hXiRJBiGdJB66GMtxqsWM2Ep-Rk-UIs-f4uHUiEndH68esX1Fls85Dv9xtmfQ3Oxncn_SIkScY0xXQwt85Vnlv3cI2eHCSgi4lPtOpVlPUc=w1267-h950-no',
        tags: ["deco1800", "week1", "contact", "reflection"]
    },
    {
        id: 'post3',
        title: 'Idea Generation',
        content: 'In week two we have started to generate project ideas based on the data provided by the State Library of Queensland (SLQ). The SLQ has a large collection of very interesting datasets which produced a number of different ideas.\n\r\n\rThe idea generation process that we used involved everything thinking of 5 ideas prior to the contact sessions and then during the contact sessions we placed our ideas categorized on whiteboards. From their we formed teams based on interest in those ideas.\n\r\n\rOne major idea that has been presented is the display of the soldier photographs in a virtual 3D gallery. The idea is that the photographs would be sorted and placed in rooms based on details of the solder, these details may be war fought in, last battle, age or unit. This idea interested me due to the challenge that a 3D environment proposes. This idea would create a virtual gallery similar to the one demonstrated below and populate it with portraits collected from the SLQ.\n\r\n\r![](https://www.weekendnotes.com/images/mary6.jpg)\n\r\n\rThe idea generation phase it week one was helpful in producing a lot of good ideas, however, due to the limited type of data available the vast majority of ideas were simple modifications to some base ideas. The idea collection in week two had an overpopulation of ideas, with each board having around 50 ideas it was impossible and impractical to read each idea. This resulted in a herd bias where an idea only ideas that have already been chosen by others were picked, which is good when trying to form teams but it is unproductive for everyone to come up with 5 ideas in this system. A maximum of 2 or 3 ideas per person would likely have reduced the idea overload.\n\r\n\rOver the next 2 weeks I aim to form a concrete plan with my team which will detail the means of source code contribution (i.e. github), due dates, deadlines and hopefully start to develop a plan of what the end result should look like and how it should function.\n\r\n\r',
        author: 'BRAE',
        date: 1501935792,
        background: 'https://lh3.googleusercontent.com/D62e0gXYN0mT7aFT0vtu16DO8u7Zx1EL6uO2B6vN7GYhpDRCMHopPk3Uj4alGz9v38Hu8gvIbbafqU_EmwPezheOmRxiTucKg_k4YLnKQdMe4Qpx_dTGee_2Q9_M_mJrMBNF7TSq6wg8j4UIk8yBE6pPpILHmOQBllkTpHWPeXEKN6twuBKrPyaUdJrJjbO7HO9qNWGJ5nJeHHaEfHmBxpji1PYWtNarnmYejLZX5CMaJdnLsx1atIU0XrABphBmXyz-uhw9dlx2gYXoTh32C4aCBDbz3-qOdeBvraHIZrkeON0KHyN54Mbmq-A3r9TATRW8lPpMYTilKy2o9gBrk1x0DJZpCws7A3MCYslBVY6jog0Wpqyb7_gnYEghabnxWDwj5dhC2bLoT-0fhkbsj6goEItMuOpH_hd0xkCP5CGZgx582K7W-sPpr0BxO_d_p418jS2lShq4IT5A5YjzF-TMDRRmnobZEJ2-fEl_CQKq4zDu5CF2WtGXXnG2yDvnMawUDJuNthkF09KCdLxA6_tLg5GBjDlJxira-QRSaGnW3WHYn_fhrXTGIUdaPD-rYUuUWpqKUOvvT25wnO_hliYYKeCR0xATlFTMcvPrs0MAFtICDCmr=w1267-h950-no',
        tags: ["deco1800", "week2", "contact", "planning", "ideas", "reflection"]
    }
];

module.exports = {
    schema: postsSchema,
    data: posts
};