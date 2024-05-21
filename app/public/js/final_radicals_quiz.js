const radicalsData = [
    { Radical: "一", Reading: "いち", Meaning: "one, horizontal stroke" },
    { Radical: "⼁", Reading: "たてぼう", Meaning: "vertical stroke" },
    { Radical: "⼂", Reading: "てん", Meaning: "dot" },
    { Radical: "⼃", Reading: "の", Meaning: "diagonal sweeping stroke" },
    { Radical: "", Reading: "のかんむり", Meaning: "diagonal sweeping stroke" },
    { Radical: "⼄", Reading: "おつ", Meaning: "the second" },
    { Radical: "⺃", Reading: "おつ", Meaning: "the second" },
    { Radical: "⼅", Reading: "はねぼう", Meaning: "vertical stroke with a hook" },
    { Radical: "⼆", Reading: "に", Meaning: "two" },
    { Radical: "⼇", Reading: "なべぶた", Meaning: "lid, top" },
    { Radical: "⼈", Reading: "ひと", Meaning: "person" },
    { Radical: "⺅", Reading: "にんべん", Meaning: "person" },
    { Radical: "𠆢", Reading: "ひとやね", Meaning: "person" },
    { Radical: "⼉", Reading: "ひとあし", Meaning: "human legs" },
    { Radical: "⼊", Reading: "いる", Meaning: "to enter" },
    { Radical: "⼋", Reading: "はち", Meaning: "eight" },
    { Radical: "", Reading: "はちがしら", Meaning: "eight" },
    { Radical: "⼌", Reading: "けいがまえ", Meaning: "to enclose" },
    { Radical: "⼍", Reading: "わかんむり", Meaning: "cover, crown" },
    { Radical: "⼎", Reading: "にすい", Meaning: "ice" },
    { Radical: "⼏", Reading: "きにょう", Meaning: "table" },
    { Radical: "⺇", Reading: "かぜかんむり", Meaning: "wind" },
    { Radical: "⼐", Reading: "かんにょう", Meaning: "container, open box" },
    { Radical: "⼑", Reading: "かたな", Meaning: "knife, sword" },
    { Radical: "⺉", Reading: "りっとう", Meaning: "knife, sword" },
    { Radical: "⼒", Reading: "ちから", Meaning: "power" },
    { Radical: "⼓", Reading: "つつみがまえ", Meaning: "to wrap" },
    { Radical: "⼔", Reading: "さじ", Meaning: "spoon" },
    { Radical: "⼕", Reading: "はこがまえ", Meaning: "box" },
    { Radical: "⼖", Reading: "かくしがまえ", Meaning: "to conceal, hide" },
    { Radical: "⼗", Reading: "じゅう", Meaning: "ten" },
    { Radical: "⼘", Reading: "ぼく", Meaning: "oracle" },
    { Radical: "⼙", Reading: "ふしづくり", Meaning: "stamp, seal" },
    { Radical: "⼚", Reading: "がんだれ", Meaning: "cliff" },
    { Radical: "⼛", Reading: "む", Meaning: "private, Katakana Mu" },
    { Radical: "⼜", Reading: "また", Meaning: "again, right hand" },
    { Radical: "⼝", Reading: "くち", Meaning: "mouth" },
    { Radical: "", Reading: "くちへん", Meaning: "mouth" },
    { Radical: "⼞", Reading: "くにがまえ", Meaning: "border, territorial boundaries" },
    { Radical: "⼟", Reading: "つち", Meaning: "earth" },
    { Radical: "", Reading: "つちへん", Meaning: "earth" },
    { Radical: "⼠", Reading: "さむらい", Meaning: "man, scholar, samurai" },
    { Radical: "", Reading: "さむらいかんむり", Meaning: "man, scholar, samurai" },
    { Radical: "⼡", Reading: "のまた", Meaning: "to follow" },
    { Radical: "⼢", Reading: "なつあし", Meaning: "to go slowly" },
    { Radical: "⼣", Reading: "ゆうべ", Meaning: "evening" },
    { Radical: "⼤", Reading: "だい", Meaning: "large, big" },
    { Radical: "⼥", Reading: "おんな", Meaning: "woman" },
    { Radical: "", Reading: "おんなへん", Meaning: "woman" },
    { Radical: "⼦", Reading: "こ", Meaning: "child, son" },
    { Radical: "", Reading: "こへん", Meaning: "child, son" },
    { Radical: "⼧", Reading: "うかんむり", Meaning: "roof, house" },
    { Radical: "⼨", Reading: "すん", Meaning: "inch, (2.25 cm)" },
    { Radical: "", Reading: "すんづくり", Meaning: "inch, (2.25 cm)" },
    { Radical: "⼩", Reading: "しょう", Meaning: "small" },
    { Radical: "⺌", Reading: "しょうかんむり", Meaning: "small" },
    { Radical: "⺐", Reading: "だいのまげあし", Meaning: "lame leg" },
    { Radical: "⼫", Reading: "しかばね", Meaning: "corpse, awning" },
    { Radical: "⼬", Reading: "くさのめ", Meaning: "sprout" },
    { Radical: "⼭", Reading: "やま", Meaning: "mountain" },
    { Radical: "", Reading: "やまへん", Meaning: "mountain" },
    { Radical: "", Reading: "やまかんむり", Meaning: "mountain" },
    { Radical: "⼮", Reading: "まがりがわ", Meaning: "winding river" },
    { Radical: "川", Reading: "さんぼんがわ", Meaning: "river" },
    { Radical: "⼯", Reading: "たくみ", Meaning: "work, carpenter, skill" },
    { Radical: "", Reading: "たくみへん", Meaning: "work, carpenter, skill" },
    { Radical: "⼰", Reading: "おのれ", Meaning: "self" },
    { Radical: "⼱", Reading: "はば", Meaning: "cloth" },
    { Radical: "", Reading: "はばへん", Meaning: "cloth" },
    { Radical: "⼲", Reading: "かん", Meaning: "to dry, shield" },
    { Radical: "⺓", Reading: "いとがしら", Meaning: "young, slight" },
    { Radical: "⼴", Reading: "まだれ", Meaning: "slanting roof" },
    { Radical: "⼵", Reading: "えんにょう", Meaning: "to move, stretch" },
    { Radical: "⼶", Reading: "にじゅうあし", Meaning: "folded hands" },
    { Radical: "⼷", Reading: "いぐるみ", Meaning: "javelin" },
    { Radical: "⼸", Reading: "ゆみ", Meaning: "bow （in archery）" },
    { Radical: "", Reading: "ゆみへん", Meaning: "bow （in archery）" },
    { Radical: "⼹", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⺕", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⺔", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⼺", Reading: "さんづくり", Meaning: "hair-style, light rays" },
    { Radical: "⼻", Reading: "ぎょうにんべん", Meaning: "step, stride, street, to go" },
    { Radical: "⺾", Reading: "くさかんむり", Meaning: "grass" },
    { Radical: "⻌", Reading: "しんにょう", Meaning: "road, walk, to advance" },
    { Radical: "⻏", Reading: "おおざと", Meaning: "village, country, city" },
    { Radical: "⻖", Reading: "こざとへん", Meaning: "hill, mound" },
    { Radical: "⺍", Reading: "つ", Meaning: "Katakana Tsu" },
    { Radical: "⺖", Reading: "りっしんべん", Meaning: "heart, mind, spirit" },
    { Radical: "⺘", Reading: "てへん", Meaning: "hand" },
    { Radical: "⺡", Reading: "さんずい", Meaning: "water" },
    { Radical: "⺨", Reading: "けものへん", Meaning: "beast" },
    { Radical: "⼼", Reading: "こころ", Meaning: "heart, mind, spirit" },
    { Radical: "⺗", Reading: "したごころ", Meaning: "heart, mind, spirit"},
    { Radical: "⼽", Reading: "ほこ", Meaning: "spear, weapon" },
    { Radical: "⼾", Reading: "と", Meaning: "door" },
    { Radical: "", Reading: "とだれ", Meaning: "door"},
    { Radical: "⼿", Reading: "て", Meaning: "hand" },
    { Radical: "⽀", Reading: "しにょう", Meaning: "branch" },
    { Radical: "⽁", Reading: "ぼくづくり", Meaning: "activity, to strike, hit" },
    { Radical: "⺙", Reading: "ぼくづくり", Meaning: "activity, to strike, hit"},
    { Radical: "⽂", Reading: "ぶん", Meaning: "literature, letters" },
    { Radical: "⽃", Reading: "ますづくり", Meaning: "big dipper, ladle, 18 liters" },
    { Radical: "⽄", Reading: "おのづくり", Meaning: "axe" },
    { Radical: "⽅", Reading: "ほう", Meaning: "direction, flag" },
    { Radical: "", Reading: "ほうへん", Meaning: "direction, flag"},
    { Radical: "⽆", Reading: "むにょう", Meaning: "not" },
    { Radical: "⽇", Reading: "ひ", Meaning: "sun, day, time" },
    { Radical: "", Reading: "ひへん", Meaning: "sun, day, time"},
    { Radical: "⽈", Reading: "ひらび", Meaning: "to say" },
    { Radical: "⽉", Reading: "つき", Meaning: "moon, month, period" },
    { Radical: "⺝", Reading: "つきへん", Meaning: "moon, month, period"},
    { Radical: "", Reading: "にくづき", Meaning: "meat, flesh"},
    { Radical: "⽊", Reading: "き", Meaning: "tree, wood" },
    { Radical: "", Reading: "きへん", Meaning: "tree, wood"},
    { Radical: "⽋", Reading: "あくび", Meaning: "to lack, yawn" },
    { Radical: "⽌", Reading: "とめる", Meaning: "to stop" },
    { Radical: "⽍", Reading: "がつ", Meaning: "death & dying, to decompose" },
    { Radical: "", Reading: "がつへん", Meaning: "death & dying, to decompose"},
    { Radical: "⽎", Reading: "るまた", Meaning: "lance shaft, action" },
    { Radical: "⽏", Reading: "なかれ", Meaning: "not, mother" },
    { Radical: "⽐", Reading: "くらべる", Meaning: "to compare" },
    { Radical: "⽑", Reading: "け", Meaning: "hair" },
    { Radical: "⽒", Reading: "うじ", Meaning: "family, clan" },
    { Radical: "⽓", Reading: "きがまえ", Meaning: "steam, air" },
    { Radical: "⽔", Reading: "みず", Meaning: "water" },
    { Radical: "⽕", Reading: "ひ", Meaning: "fire" },
    { Radical: "", Reading: "ひへん", Meaning: "fire"},
    { Radical: "⺣", Reading: "れっか", Meaning: "fire"},
    { Radical: "⽖", Reading: "つめ", Meaning: "claw, nail" },
    { Radical: "⺤", Reading: "つめかんむり", Meaning: "claw, nail"},
    { Radical: "爫", Reading: "つめかんむり", Meaning: "claw, nail"},
    { Radical: "⽗", Reading: "ちち", Meaning: "father" },
    { Radical: "⽘", Reading: "こう", Meaning: "to mix" },
    { Radical: "⽙", Reading: "しょうへん", Meaning: "split wood" },
    { Radical: "⽚", Reading: "かた", Meaning: "split wood" },
    { Radical: "", Reading: "かたへん", Meaning: "split wood"},
    { Radical: "", Reading: "きば", Meaning: "fang, canine tooth" },
    { Radical: "⽜", Reading: "うし", Meaning: "cow" },
    { Radical: "", Reading: "うしへん", Meaning: "cow"},
    { Radical: "⽝", Reading: "いぬ", Meaning: "dog" },
    { Radical: "", Reading: "おうへん", Meaning: "jewelry, jeweled king"},
    { Radical: "⺭", Reading: "しめすへん", Meaning: "altar, festival, religious service"},
    { Radical: "㓁", Reading: "あみがしら", Meaning: "net"},
    { Radical: "⺹", Reading: "おいかんむり", Meaning: "old, old-age"},
    { Radical: "⽞", Reading: "げん", Meaning: "darkness" },
    { Radical: "⽟", Reading: "たま", Meaning: "jewelry" },
    { Radical: "", Reading: "うり", Meaning: "melon" },
    { Radical: "⽡", Reading: "かわら", Meaning: "tile" },
    { Radical: "⽢", Reading: "あまい", Meaning: "sweet" },
    { Radical: "⽣", Reading: "うまれる", Meaning: "birth, to be born, live" },
    { Radical: "⽤", Reading: "もちいる", Meaning: "to use" },
    { Radical: "⽥", Reading: "た", Meaning: "rice paddy" },
    { Radical: "", Reading: "たへん", Meaning: "rice paddy" },
    { Radical: "⽦", Reading: "ひき", Meaning: "bolt of cloth" },
    { Radical: "⺪", Reading: "ひきへん", Meaning: "bolt of cloth" },
    { Radical: "⽧", Reading: "やまいだれ", Meaning: "sickness" },
    { Radical: "⽨", Reading: "はつがしら", Meaning: "outspread legs, departure" },
    { Radical: "⽩", Reading: "しろ", Meaning: "white" },
    { Radical: "", Reading: "はくへん", Meaning: "white" },
    { Radical: "⽪", Reading: "けがわ", Meaning: "skin, hide" },
    { Radical: "⽫", Reading: "さら", Meaning: "plate, bowl" },
    { Radical: "⽬", Reading: "め", Meaning: "eye" },
    { Radical: "", Reading: "めへん", Meaning: "eye" },
    { Radical: "", Reading: "よこめ", Meaning: "eye" },
    { Radical: "⽭", Reading: "ほこ", Meaning: "halberd" },
    { Radical: "", Reading: "ほこへん", Meaning: "halberd" },
    { Radical: "⽮", Reading: "や", Meaning: "arrow" },
    { Radical: "", Reading: "やへん", Meaning: "arrow" },
    { Radical: "⽯", Reading: "いし", Meaning: "stone" },
    { Radical: "", Reading: "いしへん", Meaning: "stone" },
    { Radical: "⽰", Reading: "しめす", Meaning: "altar, festival, religious service" },
    { Radical: "⽱", Reading: "じゅうのあし", Meaning: "footprint" },
    { Radical: "⽲", Reading: "のぎへん", Meaning: "grain" },
    { Radical: "⽳", Reading: "あな", Meaning: "hole, cave" },
    { Radical: "", Reading: "あなかんむり", Meaning: "hole, cave" },
    { Radical: "⽴", Reading: "たつ", Meaning: "to stand" },
    { Radical: "", Reading: "たつへん", Meaning: "to stand" },
    { Radical: "", Reading: "きば", Meaning: "fang, canine tooth" },
    { Radical: "", Reading: "きばへん", Meaning: "fang, canine tooth" },
    { Radical: "氺", Reading: "したみず", Meaning: "water" },
    { Radical: "⺫", Reading: "あみがしら", Meaning: "net" },
    { Radical: "𦉰", Reading: "あみがしら", Meaning: "net" },
    { Radical: "⻂", Reading: "ころもへん", Meaning: "clothing" },
    { Radical: "⺛", Reading: "むにょう", Meaning: "not" },
    { Radical: "⽵", Reading: "たけ", Meaning: "bamboo" },
    { Radical: "⺮", Reading: "たけかんむり", Meaning: "bamboo" },
    { Radical: "⽶", Reading: "こめ", Meaning: "rice" },
    { Radical: "", Reading: "こめへん", Meaning: "rice" },
    { Radical: "⽷", Reading: "いと", Meaning: "thread" },
    { Radical: "", Reading: "いとへん", Meaning: "thread" },
    { Radical: "⽸", Reading: "みずがめ", Meaning: "earthen jar" },
    { Radical: "⽹", Reading: "あみめ", Meaning: "net" },
    { Radical: "⽺", Reading: "ひつじ", Meaning: "sheep" },
    { Radical: "⺷", Reading: "ひつじ", Meaning: "sheep" },
    { Radical: "羽", Reading: "はね", Meaning: "feather, wing" },
    { Radical: "⽻", Reading: "はね", Meaning: "feather, wing" },
    { Radical: "⽼", Reading: "おいかんむり", Meaning: "old, old-age" },
    { Radical: "⽽", Reading: "しこうして", Meaning: "and also" },
    { Radical: "⽾", Reading: "らいすき", Meaning: "plow" },
    { Radical: "⽿", Reading: "みみ", Meaning: "ear" },
    { Radical: "", Reading: "みみへん", Meaning: "ear" },
    { Radical: "⾀", Reading: "ふでづくり", Meaning: "writing brush" },
    { Radical: "⾁", Reading: "にく", Meaning: "flesh, meat" },
    { Radical: "⾂", Reading: "しん", Meaning: "retainer, minister" },
    { Radical: "⾃", Reading: "みずから", Meaning: "self" },
    { Radical: "⾄", Reading: "いたる", Meaning: "to arrive, reach" },
    { Radical: "", Reading: "いたるへん", Meaning: "to arrive, reach" },
    { Radical: "⾅", Reading: "うす", Meaning: "mortar, quern" },
    { Radical: "⾆", Reading: "した", Meaning: "tongue" },
    { Radical: "⾇", Reading: "まいあし", Meaning: "contrary, to err" },
    { Radical: "⾈", Reading: "ふね", Meaning: "ship, boat" },
    { Radical: "", Reading: "ふねへん", Meaning: "ship, boat" },
    { Radical: "⾉", Reading: "こん", Meaning: "boundary" },
    { Radical: "⾊", Reading: "いろ", Meaning: "color" },
    { Radical: "⾋", Reading: "くさ", Meaning: "grass, plant" },
    { Radical: "⾌", Reading: "とらがしら", Meaning: "tiger" },
    { Radical: "⾍", Reading: "むし", Meaning: "worm, insect, bug" },
    { Radical: "", Reading: "むしへん", Meaning: "worm, insect, bug" },
    { Radical: "⾎", Reading: "ち", Meaning: "blood" },
    { Radical: "⾏", Reading: "ぎょうがまえ", Meaning: "to go" },
    { Radical: "⾐", Reading: "ころも", Meaning: "clothing" },
    { Radical: "⾑", Reading: "にし", Meaning: "cover, west" },
    { Radical: "⻃", Reading: "にし", Meaning: "cover, west" },
    { Radical: "⽠", Reading: "うり", Meaning: "melon" },
    { Radical: "⾒", Reading: "みる", Meaning: "to see" },
    { Radical: "⾓", Reading: "つの", Meaning: "horn, corner" },
    { Radical: "", Reading: "つのへん", Meaning: "horn, corner" },
    { Radical: "⾔", Reading: "げん", Meaning: "words, to speak, say" },
    { Radical: "", Reading: "ごんへん", Meaning: "words, to speak, say" },
    { Radical: "⾕", Reading: "たに", Meaning: "valley" },
    { Radical: "", Reading: "たにへん", Meaning: "valley" },
    { Radical: "⾖", Reading: "まめ", Meaning: "bean" },
    { Radical: "", Reading: "まめへん", Meaning: "bean" },
    { Radical: "⾗", Reading: "いのこ", Meaning: "pig" },
    { Radical: "⾘", Reading: "むじなへん", Meaning: "badger" },
    { Radical: "⾙", Reading: "かい", Meaning: "shell, property, wealth" },
    { Radical: "", Reading: "かいへん", Meaning: "shell, property, wealth" },
    { Radical: "⾚", Reading: "あか", Meaning: "red" },
    { Radical: "⾛", Reading: "はしる", Meaning: "to run" },
    { Radical: "", Reading: "そうにょう", Meaning: "to run" },
    { Radical: "⾜", Reading: "あし", Meaning: "foot, leg" },
    { Radical: "⻊", Reading: "あしへん", Meaning: "foot, leg" },
    { Radical: "⾝", Reading: "み", Meaning: "body" },
    { Radical: "", Reading: "みへん", Meaning: "body" },
    { Radical: "⾞", Reading: "くるま", Meaning: "vehicle, wheel, car" },
    { Radical: "", Reading: "くるまへん", Meaning: "vehicle, wheel, car" },
    { Radical: "⾟", Reading: "からい", Meaning: "bitter" },
    { Radical: "⾠", Reading: "しんのたつ", Meaning: "Fifth zodiac sign, 7–9 A.M." },
    { Radical: "⾡", Reading: "しんにょう", Meaning: "to advance, move ahead" },
    { Radical: "⾢", Reading: "むら", Meaning: "community" },
    { Radical: "⾣", Reading: "ひよみのとり", Meaning: "sake jar, bird" },
    { Radical: "", Reading: "とりへん", Meaning: "sake jar, bird" },
    { Radical: "⾤", Reading: "のごめ", Meaning: "to separate" },
    { Radical: "", Reading: "のごめへん", Meaning: "to separate" },
    { Radical: "⾥", Reading: "さと", Meaning: "village, (3.93 km)" },
    { Radical: "", Reading: "さとへん", Meaning: "village, (3.93 km)" },
    { Radical: "⾂", Reading: "しん", Meaning: "retainer, minister" },
    { Radical: "", Reading: "まいあし", Meaning: "contrary, to err" },
    { Radical: "⻨", Reading: "むぎ", Meaning: "wheat" },
    { Radical: "⾦", Reading: "かね", Meaning: "metal, gold, mineral" },
    { Radical: "", Reading: "かねへん", Meaning: "metal, gold, mineral" },
    { Radical: "⻑", Reading: "ながい", Meaning: "long" },
    { Radical: "⾨", Reading: "もんがまえ", Meaning: "gate, door" },
    { Radical: "⾩", Reading: "こざと", Meaning: "hill" },
    { Radical: "⾪", Reading: "れいづくり", Meaning: "to capture" },
    { Radical: "⾫", Reading: "ふるとり", Meaning: "small bird" },
    { Radical: "⾬", Reading: "あめ", Meaning: "rain" },
    { Radical: "⻗", Reading: "あめかんむり", Meaning: "rain" },
    { Radical: "⾭", Reading: "あお", Meaning: "blue, green" },
    { Radical: "⻘", Reading: "あお", Meaning: "blue, green"},
    { Radical: "⾮", Reading: "あらず", Meaning: "wrong, non-" },
    { Radical: "⻟", Reading: "しょくへん", Meaning: "food, to eat"},
    { Radical: "⻫", Reading: "せい", Meaning: "alike"},
    { Radical: "⾯", Reading: "めん", Meaning: "face, surface" },
    { Radical: "⾰", Reading: "つくりがわ", Meaning: "leather" },
    { Radical: "", Reading: "なめしがわ", Meaning: "leather" },
    { Radical: "⾲", Reading: "にら", Meaning: "leek" },
    { Radical: "⾳", Reading: "おと", Meaning: "sound, noise" },
    { Radical: "⾴", Reading: "おおがい", Meaning: "head, page"},
    { Radical: "⾵", Reading: "かぜ", Meaning: "wind" },
    { Radical: "⾶", Reading: "とぶ", Meaning: "to fly" },
    { Radical: "⾷", Reading: "しょく", Meaning: "food, to eat" },
    { Radical: "⾸", Reading: "くび", Meaning: "head" },
    { Radical: "⾹", Reading: "かおり", Meaning: "scent" },
    { Radical: "⾺", Reading: "うま", Meaning: "horse" },
    { Radical: "", Reading: "うまへん", Meaning: "horse"},
    { Radical: "⾻", Reading: "ほね", Meaning: "bone" },
    { Radical: "", Reading: "ほねへん", Meaning: "bone"},
    { Radical: "⾼", Reading: "たかい", Meaning: "high" },
    { Radical: "⾽", Reading: "かみかんむり", Meaning: "long hair" },
    { Radical: "⾾", Reading: "たたかいがまえ", Meaning: "fighting" },
    { Radical: "⾿", Reading: "においざけ", Meaning: "herbs" },
    { Radical: "⿀", Reading: "れき", Meaning: "tripod" },
    { Radical: "⿁", Reading: "おに", Meaning: "demon" },
    { Radical: "⾱", Reading: "なめしがわ", Meaning: "leather"},
    { Radical: "⿂", Reading: "うお", Meaning: "fish" },
    { Radical: "", Reading: "うおへん", Meaning: "fish"},
    { Radical: "⿃", Reading: "とり", Meaning: "bird" },
    { Radical: "⿄", Reading: "しお", Meaning: "salt" },
    { Radical: "⿅", Reading: "しか", Meaning: "deer" },
    { Radical: "⿆", Reading: "むぎ", Meaning: "wheat" },
    { Radical: "⿇", Reading: "あさ", Meaning: "hemp" },
    { Radical: "", Reading: "あさかんむり", Meaning: "hemp"},
    { Radical: "⻩", Reading: "き", Meaning: "yellow"},
    { Radical: "黒", Reading: "くろ", Meaning: "black"},
    { Radical: "⻲", Reading: "かめ", Meaning: "turtle"},
    { Radical: "⿈", Reading: "き", Meaning: "yellow" },
    { Radical: "⿉", Reading: "きび", Meaning: "millet" },
    { Radical: "⿊", Reading: "くろ", Meaning: "black" },
    { Radical: "⿋", Reading: "ぬいとり", Meaning: "embroider" },
    { Radical: "⻭", Reading: "は", Meaning: "tooth"},
    { Radical: "⿌", Reading: "かえる", Meaning: "frog" },
    { Radical: "⿍", Reading: "かなえ", Meaning: "tripod" },
    { Radical: "⿎", Reading: "つづみ", Meaning: "drum" },
    { Radical: "⿏", Reading: "ねずみ", Meaning: "rat, mouse" },
    { Radical: "⿐", Reading: "はな", Meaning: "nose" },
    { Radical: "⿑", Reading: "せい", Meaning: "alike" },
    { Radical: "⿒", Reading: "は", Meaning: "tooth" },
    { Radical: "⿓", Reading: "りゅう", Meaning: "dragon" },
    { Radical: "⿔", Reading: "かめ", Meaning: "turtle" },
    { Radical: "⿕", Reading: "やく", Meaning: "flute" }
  ];
  
  let randomRadical;
  let randomRadicals = [];
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 50;
  
  function getRandomRadical() {
    let unique = false;
    while (!unique) {
      randomRadical = radicalsData[Math.floor(Math.random() * radicalsData.length)];
      if (!randomRadicals.includes(randomRadical)) {
        unique = true;
      }
    }
    randomRadicals.push(randomRadical);
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function displayQuestion() {
    questionCount++;
    if (questionCount <= number_of_questions) {
      getRandomRadical();
      let question = randomRadical.Radical;
      document.getElementById('question').innerText = question;
  
      let correctMeaning = randomRadical.Meaning + ' (' + randomRadical.Reading + ')';
      let meanings = [];
  
      while (meanings.length < 2) {
        let randomRadicalMeaning = getRandomMeaning();
        let randomMeaning = randomRadicalMeaning.Meaning + ' (' + randomRadicalMeaning.Reading + ')';
        if (!meanings.includes(randomMeaning) && randomMeaning !== correctMeaning) {
          meanings.push(randomMeaning);
        }
      }
      meanings.push(correctMeaning);
  
      meanings = shuffle(meanings);
  
      document.getElementById('answer1').innerText = meanings[0];
      document.getElementById('answer2').innerText = meanings[1];
      document.getElementById('answer3').innerText = meanings[2];
  
      document.getElementById('questionNumber').innerText = 'Question ' + questionCount + ' of ' + number_of_questions;
    } else {
      showScore();
    }
  }
  
  function getRandomMeaning() {
    let meanings = radicalsData.filter(radical => radical.Meaning !== randomRadical.Meaning);
    return meanings[Math.floor(Math.random() * meanings.length)];
  }
  
  function checkAnswer(answer) {
    let userInput = answer.trim();
    if (userInput === '') {
      document.getElementById('result').innerText = 'Please select an answer';
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').style.fontWeight = '700';
      return;
    }
    let correctAnswer = randomRadical.Meaning + ' (' + randomRadical.Reading + ')';
    let result = userInput === correctAnswer;
    let resultDiv = document.getElementById('result');
    if (result) {
      resultDiv.innerText = 'Correct!';
      resultDiv.style.color = 'green';
      resultDiv.style.fontWeight = '700';
      correctCount++;
    } else {
      resultDiv.innerText = 'Incorrect!';
      resultDiv.style.color = 'red';
      resultDiv.style.fontWeight = '700';
    }
    displayQuestion();
  }
  
  function showScore() {
    const lvl = 'Radicals';
    document.getElementById('question').innerText = 'Quiz finished! Your score: ' + correctCount + ' out of ' + number_of_questions;
    document.getElementById('question').style.fontSize = '30px';
    document.getElementById('go_back_to').innerText = 'Go back to:';
    document.getElementById('go_back_front').innerHTML = "<a href='/'>Front Page</a>";
    document.getElementById('go_back_katakana').innerHTML = "<a href='/radicals/list'>Radicals List</a>";
    document.getElementById('answer1').style.display = 'none';
    document.getElementById('answer2').style.display = 'none';
    document.getElementById('answer3').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('questionNumber').innerText = '';
  
    const percentage = ((correctCount / number_of_questions) * 100).toFixed(2);
  
    const scoreData = {
      score: percentage,
      lvl: lvl,
    };
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/score', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('Score posted successfully');
      } else {
        console.error('Error posting score:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Network error while posting score');
    };
    xhr.send(JSON.stringify(scoreData));
  }
  
  displayQuestion();
  
  