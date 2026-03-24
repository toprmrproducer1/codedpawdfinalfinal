/*
  PAWD Blog Article Creator
  ==========================

  SETUP:
  1. Get your Admin API access token from:
     Shopify Admin → Settings → Apps →
     Develop apps → Create app → Admin API
     Scopes needed: write_content, read_content

  2. Get your blog IDs by running:
     curl -H "X-Shopify-Access-Token: YOUR_TOKEN" \
     https://4fd192.myshopify.com/admin/api/2024-01/blogs.json

     If the "guides" or "articles" blogs don't exist yet, create them:
     curl -X POST \
       -H "X-Shopify-Access-Token: YOUR_TOKEN" \
       -H "Content-Type: application/json" \
       -d '{"blog":{"title":"Guides"}}' \
       https://4fd192.myshopify.com/admin/api/2024-01/blogs.json

     curl -X POST \
       -H "X-Shopify-Access-Token: YOUR_TOKEN" \
       -H "Content-Type: application/json" \
       -d '{"blog":{"title":"Articles"}}' \
       https://4fd192.myshopify.com/admin/api/2024-01/blogs.json

  3. Run the script:
     SHOPIFY_TOKEN=your_token \
     GUIDES_BLOG_ID=your_id \
     ARTICLES_BLOG_ID=your_id \
     node create-pawd-articles.js
*/

const STORE = '4fd192.myshopify.com';
const API_VERSION = '2024-01';
const ACCESS_TOKEN = process.env.SHOPIFY_TOKEN;
const GUIDES_BLOG_ID = process.env.GUIDES_BLOG_ID;
const ARTICLES_BLOG_ID = process.env.ARTICLES_BLOG_ID;

if (!ACCESS_TOKEN || !GUIDES_BLOG_ID || !ARTICLES_BLOG_ID) {
  console.error('Missing required environment variables.');
  console.error('Usage: SHOPIFY_TOKEN=xxx GUIDES_BLOG_ID=xxx ARTICLES_BLOG_ID=xxx node create-pawd-articles.js');
  process.exit(1);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ═══════════════════════════════════════════
// GUIDES BLOG — 15 Articles
// ═══════════════════════════════════════════

const guidesArticles = [
  // ── SIZING & FIT ──
  {
    title: "How to Measure Your Dog for a Collar",
    tags: "sizing, dogs, collars",
    body_html: `
<p>A collar that fits well is more than comfortable — it's essential for your dog's safety and happiness. Whether you're welcoming a new puppy or upgrading to a PAWD leather collar, getting the measurement right is the single most important step.</p>

<h2>The Two-Finger Rule</h2>
<p>The gold standard for collar fit is simple: once the collar is fastened, you should be able to slide two fingers between the collar and your dog's neck. This gives enough room for comfort and breathing without being so loose that it could slip over your dog's head. One finger is too tight. Three fingers is too loose. Two is the sweet spot.</p>

<h2>How to Measure</h2>
<p>Grab a soft fabric tape measure — the kind you'd find in a sewing kit. Wrap it around the base of your dog's neck, right where the collar sits. This isn't at the top near the ears or down by the shoulders — it's in the middle, usually the thickest part. Pull the tape snug but not tight, and read the measurement. Add about two centimetres to that number, and that's your collar size.</p>
<p>If you don't have a tape measure, a piece of string works just as well — wrap it around, mark where it meets, then measure the string flat on a ruler.</p>

<h2>Puppies and Growing Dogs</h2>
<p>Puppies grow fast, especially between three and eight months. If your puppy is still growing, measure every two to three weeks. Consider starting with an adjustable collar or sizing up to the middle hole rather than the tightest, giving room to grow into the collar without needing to replace it immediately.</p>

<h2>Breed-Specific Tips</h2>
<p>Not all necks are created equal. Greyhounds and whippets have narrow heads and wider necks — a martingale-style fit prevents slip-offs. Bulldogs and pugs have thick, stocky necks that often sit between standard sizes; go with the larger size to avoid chafing around their skin folds. Doodles and poodle mixes have dense, fluffy coats that compress — measure through the fur, not on top of it, to avoid ordering too large.</p>

<h2>PAWD Sizing</h2>
<p>PAWD collars come in five sizes: XS (20–28 cm), S (28–36 cm), M (36–44 cm), L (44–52 cm), and XL (52–60 cm). These measurements refer to the total adjustable range of the collar. Match your dog's neck measurement to the middle of the range for the best fit — for example, a 40 cm neck sits perfectly in our Medium.</p>

<p><strong>Quick Tip:</strong> Always re-measure when switching from a flat collar to a rolled collar or vice versa. The shape of the collar changes how it sits against the neck, and a millimetre or two can make a difference in long-term comfort.</p>
`
  },
  {
    title: "Finding the Perfect Harness Fit",
    tags: "sizing, dogs, harness",
    body_html: `
<p>A harness should make walks better for both you and your dog. Fitted correctly, it distributes pressure away from the throat and gives you comfortable control. Fitted poorly, it chafes, restricts movement, or fails to do its job entirely.</p>

<h2>Back-Clip vs Front-Clip</h2>
<p>The lead attachment point changes how a harness needs to fit. Back-clip harnesses sit across the shoulders and clip at the top between the shoulder blades — they need to be snug around the chest without riding up toward the throat. Front-clip harnesses have a ring on the chest plate, and the fit is more critical here — too loose and the clip hangs to one side, reducing effectiveness. Too tight and it digs into the armpit area.</p>

<h2>Measuring Chest Girth</h2>
<p>The most important measurement for any harness is chest girth. Wrap your tape measure around the widest part of your dog's ribcage, usually just behind the front legs. Keep the tape level all the way around. This number is your primary harness size. Most PAWD harnesses are sized by chest girth, with adjustable straps to fine-tune the fit across the shoulders and belly.</p>

<h2>Pressure Points to Watch</h2>
<p>There are three areas where a harness commonly causes problems. First, behind the front legs — if the strap sits too far forward, it chafes under the arms with every step. Second, across the shoulders — a harness that's too tight here limits your dog's natural gait and can cause long-term discomfort. Third, around the neck — if the top strap rides up, you're putting pressure on the throat, defeating the point of a harness entirely.</p>

<h2>Signs It's Wrong</h2>
<p>A harness that's too tight leaves indent marks in the fur, causes rubbing or bare patches, and makes your dog resist putting it on. A harness that's too loose rotates when your dog walks, allows the dog to back out of it, or lets the chest clip hang off to one side. The perfect fit stays centred on the chest, allows full range of motion in the front legs, and doesn't shift when your dog shakes.</p>

<h2>The Multi-Point Check</h2>
<p>Once the harness is on, run through this checklist: slide two fingers under every strap. Check that the chest clip sits centred on the breastbone. Ask your dog to walk a few steps and watch for rotation. Gently pull the harness backward — it shouldn't slide over the head. These four checks take thirty seconds and prevent months of discomfort.</p>

<p><strong>Quick Tip:</strong> If you're between sizes, choose the larger one and use the adjustment straps to tighten down. A harness can always be tightened, but an undersized one simply doesn't fit.</p>
`
  },
  {
    title: "Collar Sizing Guide: From Chihuahua to Great Dane",
    tags: "sizing, dogs, breed-guide",
    body_html: `
<p>Every breed carries their neck a little differently. A dachshund's long, slender neck has nothing in common with a bulldog's thick, muscular one. This guide maps PAWD collar sizes to the breeds we see most often, so you can order with confidence.</p>

<h2>Extra Small (XS) — 20 to 28 cm</h2>
<p>This is the size for the smallest dogs: chihuahuas, toy poodles, Yorkshire terriers, and Maltese. These breeds have delicate necks that need a lightweight collar with a secure buckle. Our XS collar weighs just 40 grams, light enough that even a tiny dog barely notices it. Italian greyhound puppies often start in XS before moving to Small.</p>

<h2>Small (S) — 28 to 36 cm</h2>
<p>Small covers dachshunds, miniature schnauzers, pugs, Jack Russell terriers, cavalier King Charles spaniels, and French bulldogs. Pugs and Frenchies often straddle the line between Small and Medium — their necks are thick relative to their body size. For these breeds, measure carefully and choose the size where their measurement falls in the lower half of the range, to allow for the extra girth.</p>

<h2>Medium (M) — 36 to 44 cm</h2>
<p>The most popular size by far. Medium fits cocker spaniels, border collies, beagles, Australian shepherds, springer spaniels, kelpies, and staffies. This range also catches most medium-sized mixed breeds. The standard labrador and golden retriever females with finer necks often land in Medium too. If your dog's measurement is right at 44 cm, consider sizing up to Large for extra comfort.</p>

<h2>Large (L) — 44 to 52 cm</h2>
<p>Large is where you'll find most retrievers — both golden and Labrador — along with huskies, German shepherds, standard poodles, and Rhodesian ridgebacks. Male Labradors with thick necks typically measure 46 to 50 cm. Huskies, with their dense double coat, often benefit from sizing up in winter when their fur is at its thickest.</p>

<h2>Extra Large (XL) — 52 to 60 cm</h2>
<p>Built for the big dogs: Great Danes, Bernese mountain dogs, rottweilers, mastiffs, Saint Bernards, and Newfoundlands. These breeds need a collar with both length and width — our XL collar is broader to distribute the buckle pressure across a larger area. Giant breeds grow slowly, often not reaching their full neck size until eighteen months to two years old.</p>

<h2>When You're Between Sizes</h2>
<p>If your dog's measurement falls right on the boundary between two sizes, always go with the larger one. A collar at the very end of its adjustment range won't last as long as one sitting comfortably in the middle. Plus, weight fluctuations, seasonal coat changes, and simply having a big dinner can push measurements up a centimetre or two.</p>

<p><strong>Quick Tip:</strong> Measure your dog in the evening after they've eaten and had water. Necks are slightly larger at the end of the day, and sizing for the fullest measurement means a comfortable fit around the clock.</p>
`
  },
  {
    title: "Cat Collar Fit: The Safety Snap Rule",
    tags: "sizing, cats, collars",
    body_html: `
<p>Cats live different lives than dogs — they climb, squeeze, explore, and get into places no collar designer ever imagined. That's why cat collar fit isn't just about comfort. It's about safety, first and always.</p>

<h2>The Breakaway Buckle: Non-Negotiable</h2>
<p>Every cat collar should have a breakaway (safety snap) buckle. Full stop. A breakaway buckle is designed to pop open under pressure — if your cat's collar catches on a branch, fence, or furniture, the buckle releases and your cat goes free. A standard dog collar buckle would hold fast, and that can be fatal. PAWD cat collars use a tested breakaway mechanism rated to release at approximately two kilograms of force — enough to stay on during normal wear but light enough to save your cat from entanglement.</p>

<h2>The One-Finger Rule</h2>
<p>Dogs get two fingers of space under their collar. Cats get one. Why the difference? Cats are masters of slipping out of things. Two fingers of space on a cat collar creates enough room for a determined cat to hook a front leg through the collar or work it over their head. One finger — snug but not tight — keeps the collar secure while still allowing comfortable breathing, swallowing, and grooming.</p>

<h2>Kitten Fit Checks</h2>
<p>Kittens grow remarkably fast. A collar that fits perfectly at ten weeks may be dangerously tight by fourteen weeks. Get into the habit of checking collar fit once a week for kittens under six months. Slide your finger under the collar and feel for resistance. If you can't get a finger under, it's too tight. Adjust immediately. Most kitten collars have closely spaced adjustment holes for exactly this reason.</p>

<h2>Why Elastic Inserts Matter</h2>
<p>Some cat collars include an elastic section — a small stretch panel sewn into the collar itself. This isn't a substitute for a breakaway buckle, but it adds an extra layer of safety. If the collar snags and the buckle doesn't release immediately, the elastic stretches enough for a cat to pull free. Think of it as a backup system. For outdoor cats, we recommend both elastic and breakaway features working together.</p>

<h2>Signs of a Problem</h2>
<p>Watch for fur loss or matting under the collar — this means it's too tight or hasn't been adjusted as your cat has grown. Excessive scratching at the collar in the first few days is normal, but if it continues after a week, recheck the fit. If your cat seems lethargic or reluctant to eat, check the collar immediately — it may be pressing against the throat.</p>

<p><strong>Quick Tip:</strong> When you first put a collar on a cat, do it just before a meal. The positive association with food helps your cat accept the new sensation faster, and a cat focused on dinner is far less likely to fuss with the collar.</p>
`
  },

  // ── PRODUCT CARE ──
  {
    title: "How to Clean and Condition a Leather Collar",
    tags: "care, leather, dogs",
    body_html: `
<p>A PAWD leather collar is built to last for years — but like any quality leather product, it needs a little care to stay supple, strong, and looking its best. The good news is that maintaining leather is simple. A few minutes each month keeps your dog's collar in top condition.</p>

<h2>Regular Cleaning</h2>
<p>After every adventurous walk — especially if it involves mud, sand, or rain — give the collar a quick wipe down. Take a clean, slightly damp cloth and run it along both sides of the leather, removing surface dirt and grime. Don't soak the cloth; it should be damp, not dripping. This five-second habit prevents dirt from embedding into the leather's pores and keeps the surface clean between deeper cleans.</p>

<h2>Deep Cleaning (Monthly)</h2>
<p>Once a month, remove the collar from your dog and give it a proper clean. Dampen a soft cloth with lukewarm water and a tiny amount of saddle soap or mild, pH-neutral soap. Gently work the cloth over the entire collar, paying attention to the holes and edges where dirt accumulates. Wipe away all soap residue with a clean damp cloth. Never submerge a leather collar in water — soaking breaks down the fibres and causes the leather to stiffen and crack as it dries.</p>

<h2>Conditioning</h2>
<p>After cleaning, apply a thin layer of leather conditioner. Use a conditioner designed for full-grain leather — products with natural oils like neatsfoot oil or beeswax work beautifully. Apply a small amount to a clean cloth and rub it into the leather in circular motions. Let the conditioner absorb for ten to fifteen minutes, then buff off any excess with a dry cloth. Conditioning restores moisture to the leather, prevents cracking, and deepens the natural colour over time.</p>

<h2>Drying Leather Properly</h2>
<p>If the collar gets properly wet — caught in the rain or after a swim — dry it correctly. Lay it flat on a clean towel at room temperature. Don't hang it to dry; gravity pulls moisture downward and causes uneven drying that warps the shape. Never put it near a heater, in direct sunlight, or use a hairdryer. Rapid heat shrinks leather and makes it brittle. Patience is everything — let it air dry naturally, even if it takes a full day.</p>

<h2>After a Beach Trip</h2>
<p>Salt water is leather's worst enemy. If your dog swims in the ocean, rinse the collar with fresh water as soon as possible. Salt crystals embedded in leather draw out moisture and cause cracking. After rinsing, dry flat and condition. Our full-grain leather stands up to occasional salt exposure remarkably well, but rinsing promptly makes a real difference in longevity.</p>

<p><strong>Quick Tip:</strong> Keep a small tin of leather conditioner with your dog's lead by the door. Making it visible means you'll actually use it — most leather damage comes not from neglect, but from forgetting care exists.</p>
`
  },
  {
    title: "Understanding Leather Patina",
    tags: "care, leather, materials",
    body_html: `
<p>If you've ever admired a well-worn leather jacket or an old saddlebag with a rich, burnished glow, you've seen patina. It's one of the most beautiful qualities of genuine leather — and it's something your PAWD collar will develop over time.</p>

<h2>What Patina Is</h2>
<p>Patina is the gradual change in leather's colour, texture, and sheen that develops through use, exposure to light, and contact with natural oils from your hands and your dog's coat. It's not damage. It's not wear. It's a transformation — the leather becoming richer, deeper, and more uniquely yours. Think of it as leather's way of recording its story.</p>

<h2>Why Full-Grain Matters</h2>
<p>Only full-grain leather develops true patina. Lower grades — top-grain, corrected-grain, and bonded leather — have their surface sanded, painted, or coated, which prevents the natural ageing process. Full-grain leather retains its complete, unaltered surface, including the natural pores and grain pattern. That intact surface interacts with light, oils, and air over time, creating that sought-after rich finish. It's exactly why PAWD uses exclusively full-grain leather — because we want every collar to look better at two years old than it did on day one.</p>

<h2>The Journey of Patina</h2>
<p>In the first few weeks, changes are subtle. The leather may darken slightly where it's handled most. After a month or two, you'll notice the colour deepening to a warmer tone. At six months, the collar takes on a distinct character — subtle variations in shade where it flexes, a soft lustre where it rubs against your dog's coat. At a year and beyond, the patina is unmistakable. The leather has a depth and warmth that new leather simply cannot replicate.</p>

<h2>Encouraging Good Patina</h2>
<p>Regular conditioning is the best thing you can do. Conditioned leather develops an even, beautiful patina. Neglected leather can dry out and crack instead of ageing gracefully. Handling the collar regularly with clean hands helps too — the natural oils from your skin contribute to the patina process. Normal daily wear is all the leather needs; your dog's adventures do the rest.</p>

<h2>Preventing Problems</h2>
<p>While patina is desirable, cracking is not. The difference between the two comes down to moisture. Leather that stays conditioned develops patina. Leather that dries out develops cracks. If you notice the leather feeling stiff or looking ashy, it's time to condition. Avoid prolonged sun exposure, which can dry the surface unevenly. Store unused leather in a cool, dry place — not sealed in plastic, which traps moisture and can cause mould.</p>

<p><strong>Quick Tip:</strong> Take a photo of your PAWD collar on day one and save it. In twelve months, compare the two side by side. You'll be amazed at the transformation — and you'll understand why leather lovers never go back to synthetic.</p>
`
  },
  {
    title: "Storing Your PAWD Leather Accessories",
    tags: "care, leather, storage",
    body_html: `
<p>How you store your leather accessories when they're not around your dog's neck matters more than you might think. Proper storage protects the leather from the three things that damage it most: direct sunlight, excessive moisture, and prolonged pressure.</p>

<h2>Everyday Storage</h2>
<p>When your dog's collar comes off at the end of the day — if it comes off at all — rest it flat or loosely coiled on a clean surface. A hallway hook works fine. Avoid hanging leather by the buckle for extended periods; the weight stretches the leather around the buckle holes over time. If you have multiple collars in rotation, a shallow tray or drawer keeps them organised and protected from dust.</p>

<h2>Sunlight and Heat</h2>
<p>Leather and direct sunlight don't mix well over long periods. UV rays dry out the natural oils in the leather and can cause fading, especially with lighter tan and natural colours. If your dog's lead usually hangs on a hook by a sunny window, consider moving it or drawing the curtain. Don't store leather near heaters, radiators, or in a hot car. Heat accelerates drying and can cause irreversible stiffness.</p>

<h2>Humidity and Moisture</h2>
<p>Too much moisture breeds mould. Too little dries leather out. The ideal storage environment is the same one you're comfortable living in — moderate temperature, moderate humidity. If you live in a particularly humid climate, a small sachet of silica gel near your leather storage works wonders. In very dry climates, condition your leather more frequently to compensate for the lack of ambient moisture.</p>

<h2>Travelling with Leather</h2>
<p>When you're packing for a trip with your dog, wrap leather accessories in a soft cloth or place them in a breathable cotton bag. Never seal leather in a plastic bag — trapped moisture and heat create a sauna effect that can warp and damage the leather in hours. Give the collar a light condition before a trip and pack it where it won't be crushed by heavier items.</p>

<h2>Seasonal Considerations</h2>
<p>In summer, your dog may swim more, encounter more dust, and sweat more. Clean and condition more frequently during these months. In winter, indoor heating dries the air, which dries the leather — a monthly conditioning schedule keeps things supple. If you swap between collars seasonally, clean and lightly condition the off-season collar before storing it. This prevents it from drying out while sitting unused.</p>

<p><strong>Quick Tip:</strong> The best storage is regular use. Leather that's worn and handled regularly stays supple and develops beautiful patina. The collar that lives on your dog is always in better condition than the one sitting forgotten in a drawer.</p>
`
  },

  // ── TRAINING & BEHAVIOUR ──
  {
    title: "Introducing a New Collar to a Nervous Dog",
    tags: "training, behaviour, dogs",
    body_html: `
<p>Not every dog happily accepts a new collar. Some dogs — especially rescues, previously mistreated dogs, and puppies experiencing things for the first time — find collars stressful. The good news is that with patience and the right approach, almost every dog can learn to love wearing a collar.</p>

<h2>Start With Scent</h2>
<p>Before you even try to put the collar near your dog's neck, let them investigate it on their own terms. Place the collar on the floor near your dog's bed or food bowl. Let it sit there for a day. Your dog will sniff it, nudge it, and become familiar with it as part of their environment. This matters because dogs experience the world through scent first. A collar that smells familiar is far less threatening than one that appears from nowhere and goes straight onto the neck.</p>

<h2>Reward the Approach</h2>
<p>Once the collar has been in your dog's space for a day, hold it in your hand at your dog's level. When your dog approaches and sniffs it, reward with a treat and calm praise. Repeat this several times. You're building a positive association: collar equals good things. Don't rush this step. Some dogs are ready within a few minutes. Others need a full day of approach-and-reward before they're comfortable.</p>

<h2>Short Wearing Periods</h2>
<p>The first time the collar goes on, keep it brief. Fasten it loosely, give a treat, and remove it after thirty seconds to a minute. Gradually increase wearing time over several days — one minute, then five, then fifteen, then an hour. Always pair collar time with positive experiences: meals, play, short walks. If your dog scratches at the collar, don't remove it immediately (this rewards the scratching). Wait for a calm moment, then remove it.</p>

<h2>Rescue Dogs Need More Time</h2>
<p>Dogs that have experienced trauma may associate collars with being grabbed, restrained, or punished. Be especially gentle with these dogs. Never chase a rescue to put a collar on — this reinforces fear. Instead, let them come to you. Use high-value treats (real chicken, cheese) during collar introduction. If a dog panics, stop and try again another day. There's no deadline. A week of patient introduction is infinitely better than a single traumatic experience that sets you back months.</p>

<h2>Puppies and First Collars</h2>
<p>Puppies are generally easier because they haven't developed negative associations. Start with a light, soft collar and put it on just before meals — the puppy is so focused on food that the collar becomes background noise. Most puppies forget about their collar within the first twenty-four hours. Keep the collar on during supervised play but remove it at night and when unsupervised until the puppy is old enough not to get caught on things.</p>

<p><strong>Quick Tip:</strong> The leather PAWD collar has an advantage here — it warms to your dog's body temperature quickly and softens with wear, so it feels less foreign than rigid nylon or cold metal chain collars.</p>
`
  },
  {
    title: "Harness Training for Dogs That Pull",
    tags: "training, behaviour, harness",
    body_html: `
<p>If your dog transforms into a sled dog the moment the lead clips on, you're not alone. Pulling is one of the most common walking challenges, and a well-fitted front-clip harness is one of the most effective tools to address it — not as a magic fix, but as part of consistent training.</p>

<h2>Why Front-Clip Harnesses Help</h2>
<p>A front-clip harness attaches the lead at the centre of the dog's chest. When the dog pulls forward, the lead naturally redirects them toward you. It's physics, not force. Instead of the dog powering forward against a back clip (which actually encourages pulling by distributing pressure across the shoulders like a sled harness), a front clip turns the dog's forward momentum into a gentle pivot back toward the handler. It doesn't stop pulling overnight, but it gives you leverage to teach the alternative.</p>

<h2>The Stop-and-Wait Technique</h2>
<p>This is the foundation of loose-lead walking. The rule is simple: when the lead goes tight, you stop. Completely. Don't yank the lead back. Don't keep walking. Just stop and wait. The moment your dog turns to look at you or takes a step back, creating slack in the lead, mark the moment with a word like "yes" and move forward again. Your dog learns that pulling makes the walk stop and loose lead makes the walk continue. They want to walk. Loose lead equals walking. It's that clear.</p>

<h2>How Long It Takes</h2>
<p>Realistically? Two to four weeks of consistent daily practice for most dogs to show significant improvement. Strong pullers or dogs that have been pulling unchecked for years may take longer. The first few walks will feel frustratingly slow — you might cover half a block in twenty minutes. That's normal. You're rewriting a habit, and habits take repetition to change. Every stop-and-wait repetition is one step closer to a dog that walks nicely.</p>

<h2>Consistency Across Handlers</h2>
<p>This is where many families struggle. If one person stops when the dog pulls but another person lets the dog drag them forward, the dog learns that pulling works with some people. Everyone who walks the dog must follow the same rules. Write the rules on a card and stick it by the lead if needed. The technique only works when it's applied every single time by every single person.</p>

<h2>Building Duration</h2>
<p>Once your dog understands the stop-and-wait concept, gradually increase the difficulty. Walk past distractions. Add longer stretches before rewarding. Practice in new environments. Every successful loose-lead walk builds the habit stronger. Within a few months, your front-clip harness becomes a tool you love rather than a management device you depend on.</p>

<p><strong>Quick Tip:</strong> Use a standard 1.8-metre lead for training. Retractable leads are the enemy of loose-lead training because they teach the dog that constant tension on the lead is normal. Fixed length, consistent rules, patient repetition — that's the formula.</p>
`
  },
  {
    title: "Lead Manners: Teaching Your Dog to Walk Nicely",
    tags: "training, behaviour, lead",
    body_html: `
<p>Good lead manners are the foundation of every enjoyable walk. A dog that walks calmly on a lead opens up a world of possibilities — café outings, market strolls, bushwalks, travel. A dog that pulls, lunges, or tangles makes every outing stressful for both of you.</p>

<h2>Start Young, Start Right</h2>
<p>The best time to teach lead manners is when your puppy first starts walking outside, usually around twelve to fourteen weeks after vaccinations allow it. At this age, puppies are naturally inclined to stay close to their person. Capitalise on this by rewarding that proximity. Every time your puppy walks near your leg with a loose lead, mark the behaviour with "yes" and give a small treat. You're not teaching heel — you're teaching the concept that staying close is rewarding.</p>

<h2>The Right Lead Length</h2>
<p>A two-metre lead is ideal for everyday walking and training. It gives your dog enough room to sniff and explore while keeping them close enough to manage. A five-metre line is useful for recall training in open spaces but too long for street walks — your dog ends up too far ahead, and you have too little control. PAWD's standard leather leads come in 1.2-metre and 1.8-metre lengths, both excellent for daily walking.</p>

<h2>Marker Words</h2>
<p>A marker word is a short, consistent sound that tells your dog the exact moment they did something right. "Yes" works for most people. The word needs to be quick, distinct, and always followed by a reward. When your dog glances up at you during a walk, mark it. When they walk beside you without pulling, mark it. When they choose to come back toward you after sniffing, mark it. These small moments of connection are what loose-lead walking is built on.</p>

<h2>Rewarding Check-Ins</h2>
<p>Most dogs look at their owners regularly during walks — brief glances to check in. Many owners miss these moments entirely. Start noticing them and rewarding them. A treat, a "good dog," a quick scratch behind the ear. Over time, your dog checks in more frequently because checking in pays off. A dog that regularly checks in with their handler is a dog that naturally walks well on lead.</p>

<h2>Managing Reactive Dogs</h2>
<p>If your dog reacts to other dogs, people, or stimuli on walks, lead manners become even more important. Create distance when you see a trigger — cross the street, turn around, step off the path. Don't wait until your dog is already reacting. The goal is to keep your dog below their threshold, where they can still think and respond to you. Pair the sight of the trigger (at a distance) with treats, building a new association over time.</p>

<p><strong>Quick Tip:</strong> End every walk on a good note, even if it means cutting it short. Five minutes of beautiful loose-lead walking is worth more than thirty minutes of pulling and frustration. Quality over quantity, every time.</p>
`
  },

  // ── CAT GUIDES ──
  {
    title: "How to Introduce a Harness to Your Cat",
    tags: "cats, harness, training",
    body_html: `
<p>Cats and harnesses seem like an unlikely pair, but a growing number of cat owners are discovering the joy of safe outdoor time with their feline companions. The key word is patience — most cats can learn to accept a harness, but it happens on cat time, not yours.</p>

<h2>Why Cats Resist at First</h2>
<p>Cats don't naturally wear anything around their body. When you first put a harness on a cat, many will freeze, flop onto their side, or dramatically belly-crawl as if they've lost the ability to walk. This isn't pain or distress — it's a reflexive response to the unfamiliar sensation of pressure around their torso. It's the same reason kittens go limp when their mother carries them by the scruff. The response fades as your cat realises the harness isn't a threat.</p>

<h2>The Seven-Day Plan</h2>
<p><strong>Days 1–2:</strong> Place the harness near your cat's favourite resting spot. Let them sniff and investigate on their own terms. Some cats will rub against it, some will ignore it, some will bat it across the room. All fine.</p>
<p><strong>Days 3–4:</strong> Hold the harness and let your cat sniff it from your hands. Give a treat. Drape it lightly over your cat's back for a second, treat, and remove. Repeat several times.</p>
<p><strong>Days 5–6:</strong> Loosely fasten the harness. Let your cat wear it for five to ten minutes indoors while you play with them or offer treats. Remove it and repeat later.</p>
<p><strong>Day 7:</strong> Attach a lead and let your cat walk around indoors, dragging the lead. Supervise at all times. Once comfortable, you can begin gentle outdoor sessions in a quiet, enclosed space.</p>

<h2>Reading Your Cat</h2>
<p>Stress signals include: flattened ears, dilated pupils, low crouching posture, hissing, or vigorous attempts to back out of the harness. Curiosity signals include: upright ears, slow blinking, tail held high, sniffing at the environment. If you see stress signs, slow down and go back a step. If you see curiosity, you're on the right track.</p>

<h2>Which Cats Take to It Best</h2>
<p>Confident, outgoing cats generally adapt fastest. Breeds like Bengal, Siamese, Abyssinian, and Maine Coon are often enthusiastic harness walkers. Shy or anxious cats can learn too — they just need more time and smaller steps. Kittens under six months adapt most readily because they haven't yet developed strong opinions about What Is and Isn't Acceptable.</p>

<h2>Outdoor Safety</h2>
<p>Always use a harness outdoors, never a collar alone — cats can slip out of collars with alarming speed. Keep your cat on a short lead until you're both confident. Avoid areas with dogs, busy roads, or loud noises for the first few outings. Let your cat set the pace. Some cats will want to explore every bush. Others will sit in one spot for twenty minutes, watching the world. Both are perfectly valid outdoor experiences.</p>

<p><strong>Quick Tip:</strong> The best time to start harness training is in the late morning, when most cats are alert and curious. Avoid late evening when cats are naturally more active and less willing to tolerate new things.</p>
`
  },
  {
    title: "Is Your Cat's Collar Safe? What to Check",
    tags: "cats, collars, safety",
    body_html: `
<p>A collar is often the first line of identification for a cat — if they slip out the door or wander too far, a collar with an ID tag is what brings them home. But not all cat collars are created equal, and the wrong collar can be genuinely dangerous.</p>

<h2>Breakaway Buckles: The Only Option</h2>
<p>We'll say it plainly: if your cat's collar doesn't have a breakaway buckle, replace it today. Cats climb trees, squeeze through fences, explore under sheds, and navigate spaces full of potential snag points. A standard buckle that stays fastened can catch on a branch or nail and strangle a trapped cat. A breakaway buckle pops open under pressure, freeing your cat. It's the single most important safety feature on any cat collar, and there is no exception to this rule.</p>

<h2>The Danger of Elastic-Only Collars</h2>
<p>Some cheap cat collars rely on an elastic section instead of a breakaway buckle. The theory is that the elastic stretches enough for the cat to pull free. In practice, elastic can tighten around a cat's neck without releasing, or a panicking cat can get a leg caught in the stretched elastic, creating a tourniquet effect. Elastic is a useful secondary safety feature alongside a breakaway buckle, but it should never be the primary release mechanism.</p>

<h2>Checking for Fur Matting</h2>
<p>Lift your cat's collar and look at the fur underneath at least once a week. Long-haired cats are especially prone to matting under a collar — the constant rubbing compresses and tangles the fur, creating painful knots against the skin. If you notice matting, remove the collar, gently work out the tangles, and consider leaving the collar off for a day or two to let the skin breathe. Regularly brushing the neck area helps prevent this buildup.</p>

<h2>When to Replace</h2>
<p>Inspect your cat's collar monthly for signs of wear. Check that the breakaway buckle still functions — press it to make sure it releases cleanly and snaps back together firmly. Look for fraying at the edges, loose stitching, and worn adjustment holes. A collar that's lost its structural integrity won't release properly when needed. As a general rule, replace cat collars every twelve to eighteen months, or sooner if your cat is a particularly adventurous outdoor explorer.</p>

<h2>ID Tag Best Practice</h2>
<p>Attach a lightweight tag with your phone number — keep it simple and legible. Heavy tags annoy cats and can get caught on things. Use a flat slide-on tag rather than a dangling ring tag if your cat roams outdoors. Make sure the tag attachment is secure but not so bulky that it adds weight. And always keep tag information current — a tag with an old phone number is no help at all.</p>

<p><strong>Quick Tip:</strong> Test your cat's breakaway buckle right now. Hold the collar in both hands and pull. It should release with moderate force. If it sticks, resists, or won't release, the buckle is worn out. Replace the collar immediately.</p>
`
  },

  // ── ADDITIONAL GUIDES ──
  {
    title: "Choosing Between a Collar and a Harness",
    tags: "sizing, dogs, harness, collars",
    body_html: `
<p>It's one of the most common questions we hear at PAWD: should I use a collar or a harness for my dog? The honest answer is that most dogs benefit from having both, used for different situations. Understanding when each one shines will help you make the right choice.</p>

<h2>When a Collar Is Best</h2>
<p>Collars are ideal for everyday identification — they hold your dog's tags, registration, and contact information. For well-trained dogs that walk calmly on lead without pulling, a collar is perfectly comfortable and gives a clean, classic look. Collars are also simpler to put on and take off, making them practical for dogs that wear them all day. A well-fitted leather collar like PAWD's sits comfortably and becomes softer with wear, moulding to your dog's neck over time.</p>

<h2>When a Harness Is Best</h2>
<p>Harnesses distribute pressure across the chest and shoulders instead of concentrating it on the neck. This makes them the better choice for dogs that pull, dogs with respiratory issues (brachycephalic breeds like pugs, bulldogs, and boxers), dogs with neck injuries or tracheal sensitivity, and puppies still learning lead manners. A harness also gives you more control over strong, large dogs without risking neck strain.</p>

<h2>The Case for Both</h2>
<p>Many PAWD customers use a collar for everyday wear and ID, then clip the lead to a harness for walks. The collar stays on as permanent identification — if your dog ever slips the harness or gets loose, the collar with tags is still there. The harness does the work of managing the walk. This combination gives you the best of both worlds: security and control.</p>

<h2>Breed Considerations</h2>
<p>Small breeds with delicate tracheas — chihuahuas, Pomeranians, toy poodles — are safer in harnesses during walks. Their small windpipes are vulnerable to pressure from a collar if they lunge or pull. Sighthounds like greyhounds and whippets have necks wider than their heads, making standard collars a slip risk; martingale collars or harnesses work better for walking. Deep-chested breeds like Dobermans and Weimaraners often find harnesses more comfortable because the chest strap sits naturally around their deep ribcage.</p>

<h2>Activity Matching</h2>
<p>Going for a casual neighbourhood walk? Either works for a trained dog. Heading to a busy market or café? A harness gives you better control in crowded spaces. Hiking off-lead? A collar with tags is enough for a reliable recall dog. Training a new behaviour? A front-clip harness gives you the most teaching leverage. Match the gear to the activity, and you'll always make the right choice.</p>

<p><strong>Quick Tip:</strong> Whatever you choose, make sure it fits properly. A badly fitted harness is worse than a well-fitted collar, and vice versa. Fit is always more important than the type of gear.</p>
`
  },
  {
    title: "Wet Weather Walks: Protecting Your Gear",
    tags: "care, dogs, training",
    body_html: `
<p>Rain doesn't stop most dogs from needing their daily walk — and it shouldn't stop you either. But wet weather does require a little extra thought about your gear, especially if you're using quality leather accessories that deserve proper care.</p>

<h2>Before You Head Out</h2>
<p>If you know it's going to rain, apply a thin layer of leather conditioner to your collar and lead before the walk. This won't make them waterproof, but it creates a protective barrier that helps repel moisture and makes drying easier afterward. Think of it like putting on sunscreen before heading to the beach — a minute of prep saves a lot of trouble later.</p>

<h2>During the Walk</h2>
<p>Full-grain leather handles light to moderate rain well. The natural oils in quality leather give it some inherent water resistance. A drizzle or even steady rain won't damage a conditioned leather collar. However, if you're caught in a genuine downpour, try to keep the walk shorter. Prolonged saturation — standing in heavy rain for an hour — is what causes problems over time, not the occasional wet walk.</p>

<h2>Drying After Rain</h2>
<p>When you get home, remove the collar and lead and wipe them down with a dry cloth immediately. Don't leave wet leather sitting on a bench or draped over a hook without drying first. Lay both pieces flat on a clean, dry towel at room temperature. Let them air dry naturally. Resist the urge to speed things up with a radiator or hairdryer — rapid heat damages leather fibres and causes stiffness, cracking, and warping.</p>

<h2>Hardware Care</h2>
<p>The metal hardware on your collar and lead needs attention after wet walks too. Brass is naturally corrosion-resistant, which is one reason PAWD uses solid brass fittings. But even brass can develop a green patina if left wet repeatedly. After a rainy walk, dry your buckles and clips with a cloth. If you notice any green buildup on brass hardware, a gentle rub with white vinegar on a cloth removes it easily.</p>

<h2>Building a Wet Weather Routine</h2>
<p>The best approach is a simple post-walk ritual: come home, towel off the dog, wipe down the leather, lay it flat. It takes two minutes and becomes second nature after a few rainy walks. Once a month during the wetter season, give your leather a proper conditioning treatment to replenish what moisture and weather strip away.</p>

<p><strong>Quick Tip:</strong> Keep an old towel by the door specifically for wet weather returns. Wiping down leather while it's still just damp — before water soaks in — is significantly more effective than trying to rescue leather that's been left to dry on its own.</p>
`
  },
  {
    title: "Walking Two Dogs: Lead Management Tips",
    tags: "training, behaviour, lead, dogs",
    body_html: `
<p>Walking one dog well is a skill. Walking two dogs at the same time is an art form. Whether you've just added a second dog to the family or you're a seasoned multi-dog household, getting lead management right makes the difference between an enjoyable walk and a tangled, frustrating outing.</p>

<h2>One Hand or Two?</h2>
<p>The first decision is whether to walk both dogs from one hand or use both hands. Using both hands — one lead per hand — gives you independent control over each dog. This is the best setup for training, for reactive dogs, or for dogs of very different sizes. Walking both leads from one hand frees the other for treats, phone, or coffee, but requires dogs that walk at a similar pace and don't pull.</p>

<h2>Lead Length Matters</h2>
<p>Use leads of the same length for both dogs. Different lengths create awkward handling and constant tangling. A 1.5-metre to 1.8-metre lead for each dog is ideal — short enough for control, long enough for comfortable walking. Avoid retractable leads entirely when walking two dogs. The combination of variable lengths, thin cords, and two moving animals is a recipe for tangles and rope burns.</p>

<h2>Walking Positions</h2>
<p>Assign each dog a side. The calmer, more reliable dog walks on the side closest to the road. The more easily distracted dog walks on the inside. Be consistent with positioning — dogs learn routines quickly, and swapping sides creates confusion. If both dogs walk well, they'll naturally settle into their positions within a few walks.</p>

<h2>Managing Different Pace and Energy</h2>
<p>If one dog walks slowly and the other charges ahead, the tangling problem multiplies. Address this by training each dog separately first, ensuring both understand loose-lead walking individually. Then combine them. The faster dog needs to learn that the walk pace is set by the handler, not by them. Use the stop-and-wait technique from our pulling guide — when either dog pulls, both dogs stop.</p>

<h2>The Tangle Solution</h2>
<p>Tangles happen when dogs cross in front of or behind you. The simplest prevention: keep your arms at your sides and use body blocking to prevent dogs from switching sides. If they do tangle, stop immediately, unclip one lead, untangle, and re-clip. Don't try to untangle with both dogs still attached and moving — that only makes it worse.</p>

<p><strong>Quick Tip:</strong> Use different coloured leads or collars for each dog. When you're dealing with tangled leads and two impatient dogs, being able to instantly identify which lead belongs to which dog saves precious seconds and a lot of frustration.</p>
`
  }
];

// ═══════════════════════════════════════════
// ARTICLES BLOG — 10 Articles
// ═══════════════════════════════════════════

const articlesArticles = [
  // ── MATERIALS & CRAFT ──
  {
    title: "What Is Full-Grain Leather and Why Does It Matter?",
    tags: "materials, leather, craft",
    body_html: `
<p>Walk into any pet store and you'll find dozens of collars labelled "genuine leather." It sounds premium, but in the world of leather grading, "genuine" is actually one of the lowest quality grades. Understanding the grading system is the single best way to make an informed purchase.</p>

<h2>The Leather Grading System</h2>
<p>Leather is graded by how much of the original hide surface is retained. At the top is <strong>full-grain leather</strong> — the complete, unaltered surface of the hide with all its natural grain, texture, and strength intact. Below that is <strong>top-grain leather</strong>, which has had the outermost layer sanded or buffed to remove imperfections, then coated with a finish. Next comes <strong>genuine leather</strong>, made from the layers below the top grain — weaker, less durable, and often heavily treated to look better than it is. At the bottom is <strong>bonded leather</strong>, which is essentially leather scraps ground up and glued together with polyurethane — leather in name only.</p>

<h2>Why Full-Grain Wins</h2>
<p>Full-grain leather is the strongest because the natural fibre structure is completely intact. Those fibres haven't been sanded, split, or weakened. This means a full-grain leather collar resists stretching, tearing, and wear far longer than any other grade. A good full-grain collar will outlast three or four "genuine" leather collars — making it cheaper in the long run, despite the higher upfront cost.</p>

<h2>How to Identify It</h2>
<p>Full-grain leather has visible natural variations — subtle grain patterns, small marks, slight colour differences. These aren't flaws; they're proof that the leather is real and unaltered. If a leather surface looks perfectly uniform and smooth, it's almost certainly been sanded or coated, meaning it's not full-grain. Run your fingers over PAWD leather and you'll feel the natural texture. That's the grain doing its job.</p>

<h2>Beauty That Improves</h2>
<p>Perhaps the most remarkable quality of full-grain leather is that it looks better with age. The surface develops a rich patina — a warm, lustrous finish created by exposure to light, oils, and handling. This is why vintage leather goods are so prized. No other grade of leather does this. Top-grain's coating prevents patina. Genuine leather simply deteriorates. Only full-grain transforms and improves.</p>

<h2>Why PAWD Uses It Exclusively</h2>
<p>Every PAWD collar, lead, and harness is made from full-grain leather. We don't offer a "budget" line using lower grades because the difference in durability, feel, and beauty is too significant to compromise on. When you invest in a PAWD collar, you're getting a product designed to look better at two years old than the day you bought it. That's only possible with full-grain.</p>

<p><strong>Quick Tip:</strong> Next time you're evaluating leather goods, press your thumbnail gently into the surface. Full-grain leather will show a temporary lighter mark that fades back. Coated or bonded leather won't react at all. It's a simple test that reveals a lot.</p>
`
  },
  {
    title: "OEKO-TEX Certified: What It Means for Your Pet",
    tags: "materials, sustainability, craft",
    body_html: `
<p>You've probably seen the OEKO-TEX label on clothing and textiles, but it's becoming increasingly important in the pet accessories world too. Here's what it means, why it matters, and why PAWD takes it seriously.</p>

<h2>What Is OEKO-TEX?</h2>
<p>OEKO-TEX Standard 100 is an independent testing and certification system for textiles and leather. It tests for over 350 harmful substances — including formaldehyde, heavy metals like lead and cadmium, pesticide residues, chlorinated phenols, phthalates, and certain allergenic dyes. Products that pass earn the right to carry the OEKO-TEX label, which means they've been verified as safe for human (and animal) contact.</p>

<h2>Why It Matters for Pets</h2>
<p>Dogs and cats interact with their accessories differently than humans interact with clothing. Dogs chew their leads, lick their collars, and press their faces against harness straps. Cats groom themselves obsessively, licking anything that touches their fur. If any of those accessories contain harmful chemical residues — from the tanning process, from dyes, from fabric treatments — your pet is ingesting them. OEKO-TEX certification means the materials have been tested and verified to be free from these harmful substances at levels that could cause harm.</p>

<h2>What the Testing Covers</h2>
<p>The testing is thorough. It examines the finished product, not just the raw materials. This matters because chemicals can be introduced at every stage of production — during tanning, dyeing, finishing, and even packaging. A leather that starts clean can pick up harmful substances during processing. OEKO-TEX tests the final product to ensure nothing slipped through. The testing also considers the product's intended use, applying stricter limits for items meant for babies and sensitive skin.</p>

<h2>The Leather Connection</h2>
<p>Leather tanning is a chemical-intensive process. Traditional tanning methods use chromium salts, which, when mismanaged, can leave hexavalent chromium residues — a substance classified as carcinogenic to humans and harmful to animals. Responsible tanneries manage this carefully, but only independent certification confirms it's been done right. OEKO-TEX certification on leather means the tanning process has been managed properly and the final product is safe against skin.</p>

<h2>PAWD's Commitment</h2>
<p>We source our leather from tanneries that hold OEKO-TEX certification because we believe your pet deserves the same material safety standards you'd expect for yourself. It costs more to source certified materials. It limits our supplier options. But when we picture a puppy chewing on one of our leads — which happens daily — we know the certification is worth every cent. Your pet's health isn't an area for compromise.</p>

<p><strong>Quick Tip:</strong> When shopping for pet accessories, look for specific certifications rather than vague claims like "non-toxic" or "pet-safe," which aren't regulated or independently verified. OEKO-TEX, REACH compliance, and bluesign are all credible, third-party certifications you can trust.</p>
`
  },
  {
    title: "How PAWD Collars Are Made: Step by Step",
    tags: "materials, craft, behind-the-scenes",
    body_html: `
<p>Every PAWD collar starts as a full hide of leather and ends as a handcrafted accessory your dog will wear for years. The journey between those two points involves more steps, more skill, and more care than most people realise.</p>

<h2>Selecting the Hide</h2>
<p>It begins with selection. Not every hide makes the cut. Our team examines each full-grain hide for consistency of thickness, grain quality, and colour uniformity. Hides with excessive scarring, thin spots, or grain irregularities are set aside. From a single hide, only certain sections have the right combination of strength and flexibility for collars. The belly area is too soft. The shoulder is too thick. The back and sides — that's where collar leather comes from.</p>

<h2>Cutting</h2>
<p>Each collar blank is cut to precise width and length specifications using a clicker press — a machine that stamps through the leather with a die in the exact shape needed. Cutting by die ensures every collar is identical in width. Hand cutting with a knife is romantic but inconsistent; a millimetre variation in width changes how the collar feels around a dog's neck. Precision matters here.</p>

<h2>Edge Finishing</h2>
<p>Raw-cut leather edges are rough and fibrous. This is where handcraft truly begins. Each edge is bevelled with a hand tool to create a smooth, rounded profile. Then the edges are burnished — rubbed repeatedly with a smooth bone or wood tool along with a small amount of gum tragacanth, a natural sealant. The friction heats and compresses the leather fibres, creating a sealed, polished edge that won't fray or irritate. This step alone takes several minutes per collar and is the clearest indicator of quality craftsmanship.</p>

<h2>Hole Punching and Hardware</h2>
<p>Adjustment holes are punched at precisely spaced intervals using a rotary punch. The spacing is designed to give fine adjustment — typically every 1.5 centimetres — so your dog's collar fit can be dialled in exactly. The buckle and D-ring are fitted by hand, folding the leather end around the hardware and securing it with rivets. We use solid brass hardware throughout — heavier than zinc alloy alternatives, but significantly more durable and resistant to corrosion.</p>

<h2>Quality Control</h2>
<p>Before any collar leaves our workshop, it goes through a final inspection. Every rivet is checked for security. Every edge is run between fingers to confirm smoothness. The buckle is tested for smooth operation. The leather is examined under strong light for any defects that might have been missed. Only then is the collar stamped with PAWD's mark — a small detail that represents our confidence that this collar meets our standard.</p>

<p><strong>Quick Tip:</strong> The next time you hold a PAWD collar, run your thumb along the edge. That smooth, sealed finish is the result of several minutes of hand burnishing — a detail that mass-produced collars skip entirely. It's one of the easiest ways to feel the difference quality makes.</p>
`
  },
  {
    title: "The Hardware on Your Dog's Collar: A Guide",
    tags: "materials, hardware, craft",
    body_html: `
<p>The leather gets all the attention, but the metal hardware on your dog's collar works just as hard. Buckles, D-rings, rivets, and clasps take daily stress, exposure to the elements, and the occasional hard pull. What they're made of matters enormously.</p>

<h2>Solid Brass</h2>
<p>Brass is an alloy of copper and zinc, prized for its strength, corrosion resistance, and warm golden colour. Solid brass hardware won't rust, even with regular exposure to water and salt. It's heavier than alternatives, which gives collars and leads a satisfying, substantial feel. Over time, brass develops a natural patina that complements the leather's own ageing beautifully. PAWD uses solid brass for all collar and lead hardware — buckles, D-rings, snap hooks, and rivets.</p>

<h2>Zinc Alloy (Die-Cast)</h2>
<p>Zinc alloy is the most common material in mass-produced pet hardware. It's lightweight, cheap to manufacture, and can be electroplated to look like anything — chrome, brass, gold, matte black. The problem is durability. Zinc alloy is more brittle than brass and can snap under sudden force — exactly the kind of force generated by a dog lunging at a squirrel. Electroplating chips and peels over time, exposing the dull grey zinc underneath.</p>

<h2>Stainless Steel</h2>
<p>Stainless steel is strong and corrosion-resistant, making it a solid choice for hardware. It's lighter than brass but heavier than zinc alloy. The main downsides are aesthetic — stainless steel has a cooler, more industrial look that doesn't pair as warmly with leather. It also doesn't develop patina the way brass does. For marine environments or dogs that swim daily, stainless steel is an excellent functional choice, though at PAWD we prefer the warmth of brass.</p>

<h2>Caring for Brass Hardware</h2>
<p>Brass develops a greenish patina called verdigris when exposed to moisture and air over long periods. This is natural and not harmful, but if you prefer the bright, clean brass look, it's easy to maintain. A gentle rub with a cloth dampened with white vinegar or lemon juice removes tarnish in seconds. Dry thoroughly afterward. After beach trips, rinse hardware with fresh water to remove salt residue, which accelerates tarnishing.</p>

<h2>What Rattling Means</h2>
<p>If your dog's collar hardware suddenly starts making noise, pay attention. A rattle usually means a rivet has come loose or a D-ring has worn thin enough to shift in its housing. Check all connection points by pulling firmly. A rivet that rotates or a D-ring that's visibly thinner on one side needs replacement. Don't wait for hardware to fail during a walk — catching wear early prevents the worst-case scenario of a collar giving way when you need it most.</p>

<p><strong>Quick Tip:</strong> When comparing hardware quality, hold it up to a magnet. Solid brass is not magnetic. If the "brass" hardware on a collar sticks to a magnet, it's steel with brass plating — not the same thing at all.</p>
`
  },
  {
    title: "Sustainable Pet Accessories: How We Think About Materials",
    tags: "materials, sustainability, brand",
    body_html: `
<p>Sustainability in pet accessories is a complicated topic, and we'd rather be honest about it than make claims we can't back up. Here's how PAWD actually thinks about materials, environmental impact, and what responsible means in practice.</p>

<h2>Longevity Is Sustainability</h2>
<p>The most sustainable product is the one you don't have to replace. A PAWD leather collar lasts three to five years or more with basic care. A cheap nylon collar might last six months before fraying, fading, or having its plastic buckle snap. Over five years, that's ten cheap collars in landfill versus one leather collar still on your dog's neck. When we invest in full-grain leather and solid brass, we're not just choosing quality — we're choosing the most resource-efficient option over the product's lifetime.</p>

<h2>Leather vs Synthetic: An Honest Look</h2>
<p>This is where conversations about sustainability get nuanced. Leather is a natural material, and PAWD sources from tanneries that use responsible practices and hold environmental certifications. Leather is biodegradable at end of life. But leather production does have environmental costs — water use, chemicals, and its connection to animal agriculture. Synthetic alternatives like nylon and polyester are petroleum-based, shed microplastics, and take hundreds of years to decompose. Recycled-plastic fabrics are better but still shed microplastics and degrade faster than leather, requiring more frequent replacement.</p>
<p>We don't claim leather is perfect. We do believe that responsibly sourced, long-lasting leather is a better choice than short-lived synthetics when measured across its full lifecycle.</p>

<h2>What We Source and Why</h2>
<p>Our leather comes from tanneries that hold OEKO-TEX and Leather Working Group certifications — independent bodies that audit environmental practices including water management, chemical handling, waste disposal, and energy use. Our brass hardware is sourced from ISO-certified manufacturers. We choose suppliers who can demonstrate compliance, not just claim it.</p>

<h2>Packaging Choices</h2>
<p>Every PAWD order ships in a recyclable cardboard box with recycled tissue paper. No plastic wrap, no styrofoam peanuts, no excessive padding. Our product tags are printed on FSC-certified card stock with soy-based inks. These choices cost more than standard packaging, but they align with our belief that every touchpoint should reflect our values, not just the product itself.</p>

<h2>Where We're Going</h2>
<p>We're not done. We're working toward carbon-neutral shipping for Australian orders, exploring plant-tanned leather options for future product lines, and investigating take-back programs for worn-out PAWD products. Sustainability isn't a destination — it's a direction. We'd rather make steady, genuine progress than make grand claims we can't deliver on today.</p>

<p><strong>Quick Tip:</strong> The most sustainable thing any pet owner can do is care for what they already have. Clean your leather, condition it regularly, and store it properly. A well-maintained collar lasts years longer than a neglected one — and that's years of environmental impact avoided.</p>
`
  },

  // ── OUR BRAND STORY ──
  {
    title: "Why We Started PAWD",
    tags: "brand, story, about",
    body_html: `
<p>PAWD started with a broken buckle and a frustrated dog owner. Not a grand vision. Not a business plan. Just the simple, irritating experience of buying yet another dog collar that fell apart within months.</p>

<h2>The Breaking Point</h2>
<p>The collar that started it all was from a well-known pet chain. It looked fine in the store — attractive colour, reasonable price, decent-looking hardware. Within eight weeks, the plastic buckle had cracked during a walk. That collar was the fourth replacement in eighteen months. Four collars. Eighteen months. None of them lasting even a single season. The frustration wasn't about the money — it was about the waste, the inconvenience, and the nagging feeling that our dog deserved better than accessories designed to be replaced.</p>

<h2>The Question</h2>
<p>We started asking a simple question: why don't pet accessories have the same quality standards as the things we buy for ourselves? We carry leather wallets for a decade. We wear leather belts until long after they've gone out of style. We treasure leather bags that improve with age. But for our pets — animals we love as family — the market offered plastic clips, flimsy nylon, and faux leather that peeled within weeks. It didn't make sense.</p>

<h2>The First Collar</h2>
<p>The first PAWD collar was made by hand in a small workshop. Full-grain leather. Solid brass hardware. Hand-burnished edges. It wasn't perfect — the holes were slightly uneven, the edge finish was a bit rough in spots. But it was strong, it was beautiful, and six months later, it looked better than the day it was made. That collar is still in use today, years later. It proved the concept: make something properly, and it lasts.</p>

<h2>The Vision</h2>
<p>PAWD was founded on a belief that pets deserve the same quality of goods their owners aspire to. Not luxury for the sake of luxury. Not premium pricing for premium's sake. Quality that you can feel, see, and trust — quality that outlasts puppyhood, survives daily adventures, and gets better with time. We wanted to make accessories that owners are proud to put on their dogs, and that dogs are comfortable wearing every single day.</p>

<h2>Where We Are Now</h2>
<p>From that first hand-stitched collar, PAWD has grown into a range of collars, leads, harnesses, and accessories for dogs and cats. Every product still follows the same principle: full-grain leather, solid hardware, handcraft attention to detail, and a commitment to lasting quality. We're a small team. We know our customers by name. And we still get a thrill every time someone sends us a photo of their dog wearing a PAWD collar that's aged into something beautiful.</p>

<p><strong>Quick Tip:</strong> Still have your first PAWD collar? Send us a photo. We love seeing how our leather ages in the real world — beach walks, bush hikes, city strolls, and everything in between.</p>
`
  },
  {
    title: "The PAWD Philosophy: Buy Less, Buy Better",
    tags: "brand, philosophy, sustainability",
    body_html: `
<p>Fast fashion has come for pet accessories. Walk through any pet store and you'll see seasonal collections, trend-driven designs, and prices so low they practically guarantee disposal. A collar for five dollars. A lead for eight. An entire outfit for twelve. It feels like a bargain until you do the maths.</p>

<h2>The Cost-Per-Wear Argument</h2>
<p>A five-dollar nylon collar lasts, on average, about four months of daily wear. Over three years, that's nine collars — forty-five dollars total, plus the hassle of nine shopping trips and nine collars in landfill. A PAWD leather collar costs more upfront but lasts those same three years and beyond, looking better with age. The cost-per-day of the PAWD collar is actually lower than the cheap alternative, and you deal with zero replacements. Buy less, buy better isn't just a philosophy — it's simple economics.</p>

<h2>The Problem with Disposable</h2>
<p>Disposable pet accessories create real environmental waste. The pet industry generates billions in sales annually, and an enormous percentage of those products end up in landfill within a year. Nylon doesn't biodegrade. Plastic buckles don't decompose. Synthetic padding breaks into microplastics. Every disposable collar replaced is waste added to a planet already drowning in it. We believe there's a better way.</p>

<h2>What Quality Actually Means</h2>
<p>Quality isn't about looking expensive. It's about lasting. It's about a buckle that doesn't snap when your dog lunges at a magpie. It's about leather that gets softer instead of stiffer. It's about stitching that holds through thousands of walks. It's about not having to think about your dog's collar because it just works, day after day, year after year. That's what quality means at PAWD, and it guides every decision we make.</p>

<h2>What We Won't Compromise On</h2>
<p>We won't use lower-grade leather to hit a price point. We won't substitute zinc alloy hardware for brass to save cents per unit. We won't skip edge burnishing to speed up production. We won't use plastic packaging to reduce shipping costs. These are the lines we've drawn, and they exist because crossing any of them would undermine the reason PAWD exists. If we can't make something properly, we won't make it at all.</p>

<h2>An Invitation</h2>
<p>We're not asking you to spend more for the sake of spending. We're asking you to consider what value looks like over time. One beautiful collar versus a drawer full of forgotten ones. One lead you reach for every day versus one you replace every season. One investment in something made to last versus an endless cycle of disposable purchases. That's the PAWD philosophy: buy less, buy better, and enjoy what you have for longer.</p>

<p><strong>Quick Tip:</strong> Before your next pet accessory purchase, ask one question: will this still be in use a year from now? If the honest answer is no, it's not a bargain — it's a waste.</p>
`
  },
  {
    title: "Meet the Team Behind PAWD",
    tags: "brand, team, story",
    body_html: `
<p>PAWD is a small team with a shared obsession: making the best possible accessories for dogs and cats. We're not a faceless corporation. We're a handful of people who love what we do, love our own pets, and care deeply about the products we send out into the world.</p>

<h2>Design</h2>
<p>Our design process starts with function and ends with beauty — never the other way around. Every new product begins with a question: what problem does this solve for the dog, the cat, or the owner? We sketch, prototype, test on real dogs (our own, always willing participants), and refine until the product feels right. Design at PAWD means balancing aesthetics with practicality — a collar that looks stunning is useless if it chafes, and a perfectly functional collar that no one wants to look at isn't PAWD.</p>

<h2>Craft</h2>
<p>The hands that actually make your collar, lead, or harness are skilled artisans. Cutting, bevelling, burnishing, punching, riveting — each step requires precision and experience. Our crafters can feel the difference between a properly burnished edge and one that needs more work. They know by touch whether a piece of leather has the right flexibility for a collar versus a lead. This kind of knowledge takes years to develop and can't be replicated by a machine.</p>

<h2>Customer Care</h2>
<p>When you email PAWD, a real person reads it and a real person replies. Our customer team knows our products intimately because they use them. They can help you choose the right size, recommend the best product for your dog's needs, troubleshoot a fit issue, or simply chat about the joys of doodle ownership. We believe customer care isn't a department — it's a relationship, and we take it seriously.</p>

<h2>The Pets</h2>
<p>We'd be lying if we said the office didn't revolve around the pets who come to work each day. They're our testers, our inspiration, and our daily reminder of why we do this. Every product prototype gets worn, tugged, drooled on, and slept in by real dogs before it ever reaches a customer. If our dogs don't love it, we go back to the drawing board.</p>

<h2>What Holds Us Together</h2>
<p>Despite different roles, we share a few core beliefs: that pets deserve better than what mass production offers, that quality craftsmanship is worth protecting in an age of automation, and that a small team making excellent products is a perfectly good definition of success. We're not trying to be the biggest pet brand. We're trying to be the best at the one thing we do: handcrafted leather accessories that last.</p>

<p><strong>Quick Tip:</strong> Have a question, a suggestion, or just want to share a photo of your PAWD-wearing pet? Reach out anytime. We read everything, and there's nothing that makes our day like seeing our collars and leads out in the wild, doing their job beautifully.</p>
`
  },
  {
    title: "PAWD's Australian Roots",
    tags: "brand, australia, story",
    body_html: `
<p>Australia is one of the most pet-friendly countries in the world. Nearly two-thirds of Australian households have a pet, and our outdoor lifestyle means those pets come with us everywhere — to the beach, on bushwalks, to cafés, and on road trips. PAWD was born from this culture, and it shapes everything we design.</p>

<h2>Designing for Australian Life</h2>
<p>Australian conditions are tough on pet gear. Summer heat that warps plastic. Beach runs that coat everything in salt and sand. Bush walks through scrub that snags and scratches. A collar that works in a temperate city apartment needs to be an entirely different beast than one that survives an Australian summer at the coast. We design for the hardest conditions first — full-grain leather that handles salt water, solid brass that resists corrosion, burnished edges that don't fray in sandy environments. If a product works at the beach, it works everywhere.</p>

<h2>The Pet Ownership Culture</h2>
<p>Australians treat pets as family members, full stop. Dogs ride in the car like passengers. Cats have their own dedicated furniture. Pet owners here think nothing of investing in quality food, veterinary care, and training. PAWD fits naturally into this culture because Australian pet owners already understand the value of quality. They're not looking for the cheapest option — they're looking for the best option. That's a mindset we share.</p>

<h2>Local Thinking</h2>
<p>Being Australian means we understand the local market in a way international brands can't. We know that Australians value understatement over flashiness. We know the colour palette that works with Australian dogs (lots of golden retrievers, kelpies, and cavoodles). We know that a Sunday morning walk in Bondi is different from a cattle-station weekend in Queensland. This local knowledge informs our product range, our sizing, our colour choices, and our marketing — because we're not guessing about our customer, we are our customer.</p>

<h2>Supporting Local</h2>
<p>Where possible, we work with Australian suppliers and makers. Our boxes are printed locally. Our branding was designed by an Australian studio. When we need materials, we source domestically first and internationally only when local options don't exist. Supporting Australian businesses isn't just good ethics — it keeps supply chains shorter, reduces shipping emissions, and builds the kind of commercial community we want to be part of.</p>

<h2>The Outdoor Ethos</h2>
<p>Australia's outdoor culture is written into PAWD's DNA. Our products aren't designed for a hypothetical dog that never leaves the house. They're designed for dogs that swim, dig, roll, explore, and live big, messy, beautiful outdoor lives. Every scratch on a PAWD collar is a story. Every patina mark is a memory. We make gear for the life Australian pets actually live — not the sanitised version.</p>

<p><strong>Quick Tip:</strong> If you're based in Australia, follow us on Instagram to see our community of PAWD dogs (and cats) at Australian beaches, parks, trails, and favourite haunts. We regularly feature customer photos — yours could be next.</p>
`
  },
  {
    title: "Our Packaging: Thoughtful Down to the Box",
    tags: "brand, packaging, sustainability",
    body_html: `
<p>We believe the experience of receiving a PAWD product should feel as considered as the product itself. Packaging is often an afterthought in e-commerce — cardboard box, bubble wrap, invoice, done. We take a different approach because we think the unboxing moment matters.</p>

<h2>The Box</h2>
<p>Every PAWD order arrives in a rigid, recyclable cardboard box. Not a mailer bag. Not a padded envelope. A proper box with clean edges and a satisfying weight. We chose this format because it protects the product, presents beautifully, and is fully recyclable in standard kerbside recycling. The box itself is made from a high percentage of post-consumer recycled material, printed with water-based inks. It's sturdy enough to be repurposed as a keepsake box, a storage box, or in many households, a cat bed.</p>

<h2>Inside the Box</h2>
<p>Open the box and you'll find your product wrapped in tissue paper. That tissue is acid-free and printed with a subtle, tone-on-tone PAWD pattern using soy-based ink. Acid-free matters because standard tissue paper can leave chemical marks on leather over time — we eliminated that risk. The tissue serves dual purposes: protecting the leather from box contact and creating a moment of anticipation during unboxing.</p>

<h2>What We Don't Include</h2>
<p>No plastic. No foam inserts. No zip-lock bags. No excessive filler material. We've tested and refined our packaging to protect products during shipping without any single-use plastic. The collar or lead sits snugly in the tissue within the box, with enough natural tension to prevent movement without needing foam peanuts or air pillows. Every material inside the box goes in the recycling bin or the compost.</p>

<h2>The Handwritten Touch</h2>
<p>First orders include a handwritten note from our team. It's short — just a genuine welcome and a thank you for choosing quality over convenience. We know this doesn't scale forever. We know that at some point, volume may make handwriting every note impossible. But right now, while we're small enough to know our customers, it matters to us. A personal touch in an increasingly automated world is a small rebellion we're committed to for as long as we can sustain it.</p>

<h2>Packaging as Brand Expression</h2>
<p>Every detail of PAWD packaging reinforces what we stand for: quality materials, thoughtful design, and environmental consideration. The weight of the box says substance. The clean typography says confidence. The absence of plastic says we care beyond the sale. Packaging is a promise — it tells you what to expect from the product inside. We want that promise to be unmistakable from the moment the box arrives at your door.</p>

<p><strong>Quick Tip:</strong> Once your PAWD collar is on your dog where it belongs, give that box a second life. It makes an excellent storage box for treats, a card organiser, or — if you have cats — a ten-dollar cat toy that outperforms anything from the pet store.</p>
`
  }
];

// ═══════════════════════════════════════════
// CREATE ARTICLES FUNCTION
// ═══════════════════════════════════════════

async function createArticle(blogId, article) {
  const url = `https://${STORE}/admin/api/${API_VERSION}/blogs/${blogId}/articles.json`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ACCESS_TOKEN,
    },
    body: JSON.stringify({
      article: {
        title: article.title,
        body_html: article.body_html,
        tags: article.tags,
        published: true,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorBody}`);
  }

  return response.json();
}

async function main() {
  console.log('========================================');
  console.log('PAWD Blog Article Creator');
  console.log('========================================\n');

  let successCount = 0;
  let failCount = 0;

  // Create Guides articles
  console.log(`Creating ${guidesArticles.length} articles in "guides" blog (ID: ${GUIDES_BLOG_ID})...\n`);

  for (let i = 0; i < guidesArticles.length; i++) {
    const article = guidesArticles[i];
    try {
      const result = await createArticle(GUIDES_BLOG_ID, article);
      console.log(`  ✓ [${i + 1}/${guidesArticles.length}] "${article.title}" → ID: ${result.article.id}`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ [${i + 1}/${guidesArticles.length}] "${article.title}" → ${err.message}`);
      failCount++;
    }
    await delay(500);
  }

  console.log('');

  // Create Articles blog articles
  console.log(`Creating ${articlesArticles.length} articles in "articles" blog (ID: ${ARTICLES_BLOG_ID})...\n`);

  for (let i = 0; i < articlesArticles.length; i++) {
    const article = articlesArticles[i];
    try {
      const result = await createArticle(ARTICLES_BLOG_ID, article);
      console.log(`  ✓ [${i + 1}/${articlesArticles.length}] "${article.title}" → ID: ${result.article.id}`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ [${i + 1}/${articlesArticles.length}] "${article.title}" → ${err.message}`);
      failCount++;
    }
    await delay(500);
  }

  console.log('\n========================================');
  console.log(`Done. ${successCount} created, ${failCount} failed.`);
  console.log('========================================');
}

main();
