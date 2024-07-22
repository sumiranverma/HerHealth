import React from 'react';
import './MythBustingPage.css';

const MythBustingPage = () => {
    return (
        <div className="myth-busting-container">
            <h2>Myth Busters</h2>
            <figure className="myth-busting-figure">
                <img src="https://plus.unsplash.com/premium_photo-1708093193833-f68009ea2da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXl0aCUyMGFuZCUyMGZhY3R8ZW58MHx8MHx8fDA%3D" alt="Myth Busting" className="myth-busting-image" />
                <figcaption><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
            </figure>
            <p className="myth-busting-intro">
                When it comes to your period, you may have more questions than answers. When does it start? How often does it come? Can certain foods affect how you feel? In your search for details, you may have found information you think is factual. But some of it may be a myth, instead. Below are some common myths about your period—and the real facts to counter them.
            </p>
            <h3>Path to Improved Health</h3>
            <div className="myth-section">
                <h4>Myth: You should get your first period before you’re 14 years of age.</h4>
                <p>Fact: Most individuals get their first period between 11 and 14 years of age. But every body is different. Don’t worry if you get yours when you’re younger or older than that. However, if you don’t have your first period by the time you’re 15 years of age, talk to your doctor.</p>
                <p>If you want to get an idea of when you’ll start having periods, your body may give you clues. Your first period usually comes about 2 years after your breasts start to develop. You may also notice you begin having vaginal discharge. That usually happens between 6 and 12 months before your period begins.</p>
            </div>
            <div className="myth-section">
                <h4>Myth: It’s okay to feed your sweet tooth while on your period.</h4>
                <p>Fact: You may crave sweets during your period. That’s because your hormones are in flux and your blood sugar levels may be changing. But don’t give in to these cravings. While it’s fine to eat a small amount of sweets, don’t go overboard.</p>
                <p>Eating processed sugars provides a quick burst of energy—but it doesn’t last long. What follows is called a sugar crash. After a sugar crash, you may feel tired or have a headache. You also may feel grouchy, anxious, or depressed. Avoiding processed sugars may help you keep your emotions on an even keel.</p>
                <p>Steering clear of sugars can help your waistline, too. Overeating any of these foods can cause weight gain. Instead, reach for healthy foods during your period. The following foods have even been shown to reduce pain caused by cramps:</p>
                <ul>
                    <li>Fruits</li>
                    <li>Vegetables</li>
                    <li>Whole grains, such as whole-grain bread, brown rice, and oatmeal</li>
                    <li>Legumes, including peas, beans, and lentils</li>
                    <li>Foods high in omega-3, such as tuna, salmon, and walnuts</li>
                </ul>
            </div>
            <div className="myth-section">
                <h4>Myth: You should skip your workout while on your period.</h4>
                <p>Fact: Grab your weights or hit the gym, even during your period. Not only is exercise great for your body, it may help reduce the pain of menstrual cramps. A good workout also can relieve stress. Cardio is best, even something as simple as a brisk walk around the block. The key is to exercise all month, not just during your period. Aim for at least 30 minutes a day, 5 days a week.</p>
            </div>
            <div className="myth-section">
                <h4>Myth: You can’t get pregnant while on your period.</h4>
                <p>Fact: While it’s uncommon, you can get pregnant while on your period. This is especially true if you have a short menstrual cycle—meaning you have a shorter time than usual between your periods.</p>
                <p>Cycles are counted from the first day of your period to the first day of your next period. For most individuals, that’s usually 28 to 30 days. Ovulation typically happens 4 days before to 4 days after the half-way mark in your cycle. Ovulation is the day your ovaries release an egg to travel down your fallopian tubes to your uterus. For a person on a traditional cycle, ovulation would usually happen between days 10 and 19.</p>
                <p>If your cycle is shorter than 28 to 30 days, you will ovulate earlier. That means you won’t have as much time between your period and your next ovulation date. For example, if you have 23 days between your periods, you could ovulate as early as day 7. So if you have sex toward the end of your period, you may be able to get pregnant. That’s because an egg can live in your uterus up to 24 hours, and sperm can live in your uterus for up to 5 days. Having sex toward the end of your period increases the chances for the egg and sperm to meet and result in pregnancy.</p>
            </div>
            <div className="myth-section">
                <h4>Myth: You shouldn’t skip your period.</h4>
                <p>Fact: It is not uncommon to skip a period every once in a while. There are many reasons. You may miss a month if you’re under a lot of stress, you’re exercising more, or you’ve started or stopped using hormonal birth control. Additionally, irregular periods are common in individuals who have just started menstruating and people who are close to menopause. There are other reasons, too. If you miss two periods in a row, talk with your doctor. They will likely do a pregnancy test. If you’re not pregnant, they can help you determine next steps.</p>
            </div>
            <h3>Questions to Ask Your Doctor</h3>
            <ul>
                <li>I got my period before I was 11 years old. Is that normal?</li>
                <li>What else can I do during my period to relieve cramps?</li>
                <li>Sometimes I skip more than one period and am not pregnant. Is there something wrong with me?</li>
                <li>Sometimes my period is light and sometimes it’s heavy. Why is it different?</li>
                <li>What if my periods are so painful that I can’t even do normal activities?</li>
            </ul>
        </div>
    );
};

export default MythBustingPage;
