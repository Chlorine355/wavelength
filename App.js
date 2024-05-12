import * as React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Animated,
  Easing,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Slider } from '@miblanchard/react-native-slider';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Toast from 'react-native-simple-toast'

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const pairs = [
  ['Bad', 'Good'],
  ['Mildly addictive', 'Highly addictive'],
  ['Hot', 'Cold'],
  ['Normal', 'Weird'],
  ['Colorless', 'Colorful'],
  ['Low calorie', 'High calorie'],
  ['Feels bad', 'Feels good'],
  ['Inessential', 'Essential'],
  ['Cheap', 'Expensive'],
  ['Underrated weapon', 'Overrated weapon'],
  ['Rare', 'Common'],
  ['Unsexy emoji', 'Sexy emoji'],
  ['Easy subject', 'Hard subject'],
  ['Unknown', 'Famous'],
  ['Difficult to use', 'Easy to use'],
  ['Tired', 'Wired'],
  ['Dirty', 'Clean'],
  ['Requires luck', 'Requires skill'],
  ['Flavorless', 'Flavorful'],
  ['Boring topic', 'Fascinating topic'],
  ['Bad actor', 'Good actor'],
  ['Basic', 'Hipster'],
  ['Dangerous job', 'Safe job'],
  ['Fantasy', 'Sci-Fi'],
  ['Casual', 'Formal'],
  ['Underpaid', 'Overpaid'],
  ['Dry', 'Wet'],
  ['Underrated skill', 'Overrated skill'],
  ['Forbidden', 'Encouraged'],
  ['Sad song', 'Happy song'],
  ['Fragile', 'Durable'],
  ['Geek', 'Dork'],
  ['Good', 'Evil'],
  ['Worst day of the year', 'Best day of the year'],
  ['Bad habit', 'Good habit'],
  ['Cat person', 'Dog person'],
  ['Guilty pleasure', 'Openly love'],
  ['Untalented', 'Talented'],
  ['Dark', 'Light'],
  ['Underrated actor', 'Overrated actor'],
  ['Hard to find', 'Easy to find'],
  ['Ugly man', 'Beautiful man'],
  ['Hard to remember', 'Easy to remember'],
  ['Lowbrow', 'Highbrow'],
  ['Unhealthy', 'Healthy'],
  ['Bad man', 'Good man'],
  ['Historically important', 'Historically irrelevant'],
  ['Hairless', 'Hairy'],
  ['Inflexible', 'Flexible'],
  ['Normal pet', 'Exotic pet'],
  ['Introvert', 'Extrovert'],
  ['Book was better', 'Movie was better'],
  ['Bad movie', 'Good movie'],
  ['Ugly', 'Beautiful'],
  ['Happens slowly', 'Happens suddenly'],
  ['Job', 'Career'],
  ['Loved', 'Hated'],
  ['The Light Side of the Force', 'The Dark Side of the Force'],
  ['Bad pizza topping', 'Good pizza topping'],
  ['Dystopia', 'Utopia'],
  ['Mature person', 'Immature person'],
  ['Underrated thing to own', 'Overrated thing to own'],
  ['Mean person', 'Nice person'],
  ['Action movie', 'Adventure movie'],
  ['Mental activity', 'Physical activity'],
  ['Uncontroversial topic', 'Controversial topic'],
  ['Need', 'Want'],
  ['Dry food', 'Wet food'],
  ['Normal thing to own', 'Weird thing to own'],
  ['Straight', 'Curvy'],
  ['Bad person', 'Good person'],
  ['80s', '90s'],
  ['Ethical to eat', 'Unethical to eat'],
  ['Movie', 'Film'],
  ['Optional', 'Mandatory'],
  ['Underrated letter of the alphabet', 'Overrated letter of the alphabet'],
  ['Ordinary', 'Extraordinary'],
  ['Hard to pronounce', 'Easy to pronounce'],
  ['Low quality', 'High quality'],
  ['Unsexy animal', 'Sexy animal'],
  ['Plain', 'Fancy'],
  ['Has a bad reputation', 'Has a good reputation'],
  ['Poorly made', 'Well made'],
  ['Not a sandwich', 'A sandwich'],
  ['Quiet place', 'Loud place'],
  ['Comedy', 'Drama'],
  ['Dangerous', 'Safe'],
  ['Culturally significant', 'Culturally insignificant'],
  ['Replaceable', 'Irreplaceable'],
  ['Worst athlete of all time', 'Greatest athlete of all time'],
  ['Role model', 'Bad influence'],
  ['Useless major', 'Useful major'],
  ['Peaceful', 'Warlike'],
  ['Underrated movie', 'Overrated movie'],
  ['Rough', 'Smooth'],
  ['Bad for you', 'Good for you'],
  ['Round', 'Pointy'],
  ['Proof that God exists', 'Proof that God doesn’t exist'],
  ['Sad movie', 'Happy movie'],
  ['Waste of time', 'Good use of time'],
  ['Scary animal', 'Nice animal'],
  ['Mainstream', 'Niche'],
  ['Short lived', 'Long lived'],
  ['Nobody does it', 'Everybody does it'],
  ['Smells bad', 'Smells good'],
  ['Star Wars', 'Star Trek'],
  ['Snack', 'Meal'],
  ['Least evil company', 'Most evil company'],
  ['Soft', 'Hard'],
  ['Sustenance', 'Haute cuisine'],
  ['Square', 'Round'],
  ['Better hot', 'Better cold'],
  ['Stupid', 'Brilliant'],
  ['Artisanal', 'Mass produced'],
  ['Bad superpower', 'Good superpower'],
  ['Ineffective', 'Effective'],
  ['Unbelievable', 'Believable'],
  ['Trashy', 'Classy'],
  ['Temporary', 'Permanent'],
  ['Looks like a person', "Doesn't look like a person"],
  ['Tastes bad', 'Tastes good'],
  ['Sport', 'Game'],
  ['Uncool', 'Cool'],
  ['Worst living person', 'Greatest living person'],
  ['Underrated', 'Overrated'],
  ['Messy food', 'Clean food'],
  ['Unethical', 'Ethical'],
  ['Bad gift', 'Good gift'],
  ['Unfashionable', 'Fashionable'],
  ['Freedom fighter', 'Terrorist'],
  ['Unforgiveable', 'Forgiveable'],
  ['Failure', 'Masterpiece'],
  ['Harmless', 'Harmful'],
  ['Gryffindor', 'Slytherin'],
  ['Unhygienic', 'Hygienic'],
  ['Bad music', 'Good music'],
  ['Useless', 'Useful'],
  ['Movie that Godzilla would ruin', 'Movie that Godzilla would improve'],
  ['Unimportant', 'Important'],
  ['Easy to spell', 'Hard to spell'],
  ['Vice', 'Virtue'],
  ['Underrated musician', 'Overrated musician'],
  ['Unpopular activity', 'Popular activity'],
  ['Divided', 'Whole'],
  ['Unreliable', 'Reliable'],
  ['Easy to kill', 'Hard to kill'],
  ['Unstable', 'Stable'],
  ['Round animal', 'Pointy animal'],
  ['Bad TV show', 'Good TV show'],
  ['Traditionally masculine', 'Traditionally feminine'],
  ['Useless body part', 'Useful body part'],
  ['Fad', 'Classic'],
  ['Weak', 'Strong'],
  ['Disgusting cereal', 'Delicious cereal'],
  ['Useless invention', 'Useful invention'],
  ['Liberal', 'Conservative'],
  ['Unpopular', 'Popular'],
  ['Friend', 'Enemy'],
  ['Boring', 'Exciting'],
  ['Smelly in a bad way', 'Smelly in a good way'],
  ['Villain', 'Hero'],
  ['Underrated thing to do', 'Overrated thing to do'],
  ['Useless in an emergency', 'Useful in an emergency'],
  ['For kids', 'For adults'],
  ['Wise', 'Intelligent'],
  ['Easy to do', 'Hard to do'],
  ['Worthless', 'Priceless'],
  ['Nature', 'Nurture'],
  ['Dictatorship', 'Democracy'],
  ['Normal greeting', 'Weird greeting'],
  ['Dog name', 'Cat name'],
  ['Non-partisan', 'Partisan'],
  ['Limited', 'Infinite'],
  ['Casual event', 'Formal event'],
  ['Bad investment', 'Good investment'],
  ['Small talk', 'Heavy topic'],
  ['Mild', 'Spicy'],
  ['Religious', 'Sacrilegious'],
  ['Not art', 'Art'],
  ['Illegal', 'Prohibited'],
  ['Popular', 'Elitist'],
  ['Out of control', 'In control'],
  ['Quiet', 'Loud'],
  ['Unsexy Pokémon', 'Sexy Pokémon'],
  ['Secret', 'Public knowledge'],
  ['Too small', 'Too big'],
  ['Short', 'Long'],
  ['Worst year in history', 'Best year in history'],
  ['Socialist', 'Capitalist'],
  ['Little known fact', 'Well known fact'],
  ['Stationary', 'Mobile'],
  ['Local issue', 'Global issue'],
  ['Talent', 'Skill'],
  ['Worst era to time travel', 'Best era to time travel'],
  ['The worst', 'The best'],
  ['Small number', 'Large number'],
  ['TRUE', 'FALSE'],
  ['Old fashioned', 'Avant garde'],
  ['Ugly word', 'Beautiful word'],
  ['Small', 'Tiny'],
  ['Unnatural', 'Natural'],
  ['Genuine person', 'Phony person'],
  ['Derivative', 'Original'],
  ['Etiquette', 'Manners'],
  ['Unsexy color', 'Sexy color'],
  ['Benefits you', 'Benefits everyone'],
  ['Powerless', 'Powerful'],
  ['Doesn’t vape', 'Vapes'],
  ['Fruit', 'Vegetable'],
  ['Science', 'Pseudoscience'],
  ['Funny topic', 'Serious topic'],
  ['Limp', 'Firm'],
  ['Guilty pleasure', 'Actually just bad'],
  ['Gossip', 'News'],
  ['Hard to sit on', 'Easy to sit on'],
  ['Not enough', 'Too much'],
  ['Horizontal', 'Vertical'],
  ['Unscented', 'Scented'],
  ['Huggable', 'Not huggable'],
  ['Heterogeneous', 'Homogenous'],
  ['Inclusive', 'Exclusive'],
  ['Bad dog breed', 'Good dog breed'],
  ['Art', 'Commerce'],
  ['One hit wonder', 'Pop icon'],
  ['Bad advice', 'Good advice'],
  ['Tick', 'Tock'],
  ['Bad candy', 'Good candy'],
  ['Traditional', 'Radical'],
  ['Bad mouthfeel', 'Good mouthfeel'],
  ['Illegal', 'Legal'],
  ['Deep thought', 'Shallow thought'],
  ['Bad school', 'Good school'],
  ['Never on time', 'Always on time'],
  ["Won't live to 100", 'Will live to 100'],
  ['Bad Disney character', 'Good Disney character'],
  ['Similar', 'Identical'],
  ['Bad president', 'Good president'],
  ['Weird', 'Strange'],
  ['Famous', 'Infamous'],
  ['Least powerful god', 'Most powerful god'],
  ['Boring person', 'Fun person'],
  ['Underrated book', 'Overrated book'],
  ['Conventional wisdom', 'Fringe belief'],
  ['Worst chore', 'Best chore'],
  ['Endangered species', 'Overpopulated species'],
  ['Blue', 'Green'],
  ['Thrilling', 'Terrifying'],
  ['Nerd', 'Jock'],
  ['Expected', 'Unexpected'],
  ['Person you could beat up', 'Person who’d beat you up'],
  ['Unreasonable phobia', 'Reasonable phobia'],
  ['Underrated game', 'Overrated game'],
];

function BigButton(props) {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={props.color == 'blue' ? '#000066' : '#E56E00'}
      style={props.color == 'blue' ? styles.button_blue : styles.button_orange}
      onPress={props.onPress}>
      <Text
        style={{
          color: 'white',
          fontSize: props.fontSize ? props.fontSize : 30,
          fontWeight: 'bold',
        }}>
        {props.text}
      </Text>
    </TouchableHighlight>
  );
}
function HomeScreen({ navigation }) {
  shiftValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(this.shiftValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: false, // To make use of native driver for performance
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const shift = this.shiftValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-deviceWidth, 0],
  });

  shiftValue1 = new Animated.Value(0);

    // First set up animation
    Animated.loop(
      Animated.timing(this.shiftValue1, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: false, // To make use of native driver for performance
      })
    ).start();

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const shift1 = this.shiftValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [-deviceWidth, 0],
    });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 100,
      }}>
      <View
        style={{
          transform: 'rotate(-5deg)',
          display: 'flex',
          position: 'relative',
        }}>
        <Text
          style={{
            fontSize: 60,
            color: '#3333AA',
            fontWeight: 'bold',
            left: -30,
          }}>
          Дλина
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: '#FF7E00',
            top: -40,
            left: 60,
            fontWeight: 'bold',
          }}>
          воλны
        </Text>
      </View>
      <View style={{ width: deviceWidth, position: 'relative' }}>
        <Animated.Image
          source={require('./src/blue_sine.png')}
          style={{
            width: deviceWidth * 2,
            height: 100,
            resizeMode: 'contain',
            left: shift,
          }}
        />

        <Animated.Image
          source={require('./src/yellow_sine.png')}
          style={{
            width: deviceWidth * 2,
            height: 100,
            resizeMode: 'contain',
            left: shift1,
            position: "absolute",
            top: 20,
          }}
        />
        <Animated.Image
                  source={require('./src/green_sine.png')}
                  style={{
                    width: deviceWidth * 2,
                    height: 100,
                    resizeMode: 'contain',
                    left: shift1,
                    position: "absolute",
                    top: -20,
                  }}
                />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
        }}>
        {false && (
          <Button
            title="Продолжить игру"
            onPress={() => console.log('continue')}
          />
        )}

        <BigButton
          onPress={() => {
            navigation.navigate('Teams');
          }}
          text="Новая игра"
          color="blue"
        />

        <BigButton
          onPress={() => {
            navigation.navigate('HowToPlay');
          }}
          text="Как играть?"
          color="orange"
        />
      </View>
    </View>
  );
}

function HowToPlay({ navigation }) {
  const target = 15;
  return (
  <ScrollView>
    <View style={{ padding: 20, gap: 20, alignItems: 'flex-start' }}>
      <Text style={{fontSize: 15, color: "black"}}>
        Несколько команд играют до определённого количества очков. В каждом
        раунде случайно выбирается тема спектра - например, "горячее - холодное"
        или "ужасы - романтика".
      </Text>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text>Романтика</Text>
      </View>
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            gap: 0,
            left: STEP_WIDTH * (target - 4),
            display: 'flex',
          }}>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#BCBCBC',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#F8BB00',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#FE652B',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#51B6C3',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>4</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#FE652B',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#F8BB00',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#BCBCBC',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
          </View>
        </View>
        <Slider
          value={1}
          thumbStyle={{
            width: STEP_WIDTH,
            height: 30,
            borderRadius: 50,
            display: 'none',
          }}
          trackStyle={{ width: 300 }}
          minimumValue={1}
          maximumValue={RANGE_MAX}
          step={1}
          disabled={true}
        />
      </View>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Text>Ужасы</Text>
      </View>
      <Text  style={{fontSize: 15, color: "black"}}>
        Ведущий видит, в какой области спектра команда должна разместить свою
        отметку, и придумывает такое понятие, которое бы он разместил в этой
        области.{' '}
      </Text>
      <Text  style={{fontSize: 15, color: "black"}}>
        После этого команда выбирает место на спектре, где, как им кажется,
        должно располагаться то, что сказал ведущий...
      </Text>

      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text>Романтика</Text>
      </View>
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <Slider
          value={14}
          thumbStyle={{
            width: STEP_WIDTH,
            height: 30,
            borderRadius: 50,
            display: 'flex',
          }}
          trackStyle={{ width: 300 }}
          minimumValue={1}
          maximumValue={RANGE_MAX}
          step={1}
          disabled={false}
        />
      </View>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Text>Ужасы</Text>
      </View>
      <Text style={{fontSize: 15, color: "black"}}>
        ...и получают баллы в зависимости от того, насколько точно они попали в
        область.
      </Text>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text>Романтика</Text>
      </View>
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            gap: 0,
            left: STEP_WIDTH * (target - 4),
            display: 'flex',
          }}>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#BCBCBC',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#F8BB00',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#FE652B',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#51B6C3',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>4</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#FE652B',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#F8BB00',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
          </View>
          <View
            style={{
              width: STEP_WIDTH,
              height: 40,
              backgroundColor: '#BCBCBC',
            }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
          </View>
        </View>
        <Slider
          value={15}
          thumbStyle={{
            width: STEP_WIDTH,
            height: 30,
            borderRadius: 50,
            display: 'flex',

          }}
          trackStyle={{ width: 300 }}
          minimumValue={1}
          maximumValue={RANGE_MAX}
          step={1}
          disabled={true}
        />
      </View>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Text>Ужасы</Text>
      </View>
    </View>
    </ScrollView>
  );
}

function Teams({ navigation }) {
  const [list, setList] = React.useState([
    { id: 0, name: 'Кошки' },
    { id: 1, name: 'Мышки' },
  ]);
  const [id, setId] = React.useState(2);
  function setName(id, name) {
    setList(
      list.map((item) => {
        if (item.id == id) {
          return { id: id, name: name };
        } else {
          return item;
        }
      })
    );
  }

  function checkNames() {
    for (let team of list) {
      if (team.name == "") {
        return false
      }
    }
    return true;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 30,
        justifyContent: 'space-between',
        gap: 15,
      }}>
      {list.length === 0 ? (
        <Text>Список пуст!</Text>
      ) : (
        <FlatList
          removeClippedSubviews={true}
          // contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
          data={list}
          renderItem={({ item }) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                backgroundColor: "white",
                justifyContent: "space-between",
                // marginBottom: 20,
                alignItems: 'center',
                padding: 5,
                paddingLeft: 15,
                width: deviceWidth,
              }}>
              <TextInput
                maxLength={20}
                style={{fontSize: 20, flex: 1, fontWeight: "bold"}}
                value={item.name}
                placeholder="Название команды..."
                onChangeText={(text) => setName(item.id, text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setList(list.filter((a) => a.id !== item.id));
                }}
                disabled={list.length < 3}
                style={{
                  display: list.length < 3 ? "none" : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                }}>
                <Icon name="xmark" size={30}/>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <BigButton
        text="Добавить команду"
        onPress={() => {
          setId(id + 1);
          setList([...list, { id: id, name: '' }]);
        }}
        color="blue"
        fontSize={25}
      />
      <BigButton
        text="Далее"
        onPress={() => {
          if (checkNames()) {
          navigation.navigate('Settings', {
            teams: list.map((item) => {
              return { ...item, score: 0 };
            }),
          })} else {Toast.show("Введите названия всех команд!")};
        }}
        color="orange"
        fontSize={25}
      />
    </View>
  );
}

function SettingsScreen({ navigation, route }) {
  const { teams } = route.params;
  const [scoreToWin, setScoreToWin] = React.useState(10);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 60,
        paddingVertical: 150,
      }}>
      <Text style={{color: "black", fontSize: 35}}>Очков до победы</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <TouchableHighlight underlayColor="#E56E00" style={{borderRadius: 100, backgroundColor: scoreToWin == 10 ? "#c2c2c2" : "#FF7E00", width: 70, height: 70, justifyContent: "center", alignItems: "center"}}
          disabled={scoreToWin == 10}
          onPress={() => {
            if (scoreToWin > 10) {
              setScoreToWin(scoreToWin - 5);
            }
          }}
        >
        <Icon name="minus" size={50}  color="black"/>
        </TouchableHighlight>
        <Text style={{fontSize: 40, color: "black"}}>{scoreToWin}</Text>
        <TouchableHighlight underlayColor="#E56E00" style={{borderRadius: 100, backgroundColor: "#FF7E00", width: 70, height: 70, justifyContent: "center", alignItems: "center"}}

                  onPress={() => setScoreToWin(scoreToWin + 5)}
                >
                <Icon name="plus" size={50} color="black"/>
        </TouchableHighlight>
      </View>
      <BigButton
        onPress={() => {
          navigation.navigate('Play', {
            teams: teams,
            currentTeamIndex: 0,
            scoreToWin: scoreToWin,
          });
        }}
        text="Играть"
        color="blue"
      />
    </View>
  );
}

function Overlay(props) {
  const [show, setShow] = React.useState(true);
  return (
    <View
      style={{
        display: show ? 'flex' : 'none',
        flex: 1,
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: deviceWidth,
        height: deviceHeight,
        top: 0,
        left: 0,
        backgroundColor: 'black',
      }}>
      <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>
        Передайте телефон ведущему команды {'\n'}
        {'\n'} {props.team} {'\n'}
        {'\n'} и нажмите кнопку
      </Text>
      <BigButton
        color="blue"
        text="Далее"
        onPress={() => {
          setShow(false);
        }}
      />
    </View>
  );
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RANGE_MAX = 25;
const STEP_WIDTH = 300 / RANGE_MAX;

function Play({ navigation, route }) {
  const [pair, setPair] = React.useState(pairs[randInt(0, pairs.length - 1)]);
  const { teams, currentTeamIndex, scoreToWin } = route.params;
  const [target, setTarget] = React.useState(randInt(1, RANGE_MAX));
  const [area_to_score, setAreaToScore] = React.useState({
    [target]: 4,
    [target - 1]: 3,
    [target + 1]: 3,
    [target - 2]: 2,
    [target + 2]: 2,
    [target + 3]: 1,
    [target - 3]: 1,
  });
  const [phase, setPhase] = React.useState(1);
  const [selectedValue, setSelectedValue] = React.useState(1);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        gap: 20,
        paddingVertical: 100,
        justifyContent: 'space-between',
      }}>
      <Text style={{ textAlign: 'center', color: "black", fontSize: 40, fontWeight: "bold" }}>
                {teams[currentTeamIndex].name}
              </Text>
      <View style={{gap: 20}}>
      <View style={{gap: 20}}>
        <View
          style={{
            width: 300,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text>{pair[1]}</Text>
        </View>
        <View style={{ position: 'relative', overflow: 'hidden' }}>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              gap: 0,
              left: STEP_WIDTH * (target - 4),
              display: phase == 1 || phase == 3 ? 'flex' : 'none',
            }}>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#BCBCBC',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#F8BB00',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#FE652B',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#51B6C3',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>4</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#FE652B',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#F8BB00',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>2</Text>
            </View>
            <View
              style={{
                width: STEP_WIDTH,
                height: 40,
                backgroundColor: '#BCBCBC',
              }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>1</Text>
            </View>
          </View>
          <Slider
            value={1}
            thumbStyle={{
              width: STEP_WIDTH,
              height: 30,
              borderRadius: 50,
              display: phase == 1 ? 'none' : 'flex',
            }}
            trackStyle={{ width: 300 }}
            minimumValue={1}
            maximumValue={RANGE_MAX}
            step={1}
            disabled={phase == 3}
            onValueChange={(value) => {
              setSelectedValue(value[0]);
            }}
          />
        </View>
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Text>{pair[0]}</Text>
      </View>
    </View>
      {phase == 1 && (
        <BigButton
          color="blue"
          fontSize={25}
          text="Передаю команде"
          onPress={() => {
            setPhase(2);
          }}
        />
      )}
      {phase == 2 && (
        <BigButton
          color="blue"
          fontSize={25}
          text="Подтвердить выбор"
          onPress={() => {
            setPhase(3);
            if (selectedValue.toString() in area_to_score) {
              teams[currentTeamIndex].score =
                teams[currentTeamIndex].score + area_to_score[selectedValue];
            }
          }}
        />
      )}
      {phase == 3 && (
        <BigButton
          color="blue"
          fontSize={25}
          text="Передать ход"
          onPress={() => {
            let won = false;
            if (currentTeamIndex + 1 === teams.length) {
              let scores = teams.map( (item) => {return item.score} );
              let greatest = Math.max(...scores);
              if (greatest > scoreToWin) {
                let max_found = scores.filter( (item) => {return item === greatest} ).length;
                if (max_found == 1) {won = true};
              }
            }

            if (won) {
              navigation.replace('Winner', {
                teams: teams,
                scoreToWin: scoreToWin,
              });
            } else {
              navigation.replace('Play', {
                teams: teams,
                currentTeamIndex: (currentTeamIndex + 1) % teams.length,
                scoreToWin: scoreToWin,
              });
            }
          }}
        />
      )}
      </View>
      <View>
        {teams.map((team) => {
          return (
            <Text key={team.id} style={{ textAlign: 'center', color:"black", fontSize: 20 }}>
              {' '}
              {team.name}: {team.score}{' '}
            </Text>
          );
        })}
      </View>
      <Overlay team={teams[currentTeamIndex].name} />
    </View>
  );
}

function Winner({ navigation, route }) {
  const { teams, scoreToWin } = route.params;
  let sorted_teams = [...teams];
  sorted_teams.sort((a, b) => { return  b.score - a.score;});
  const winner = sorted_teams[0];
  sorted_teams = sorted_teams.splice(1);
  return (
    <View style={{alignItems: "center", gap: 15, padding: 20}}>
      <Text style={{fontSize: 40, color: "black", fontWeight: "bold"}}>
      {winner.name}: {winner.score}
      </Text>
      <Text>
        {sorted_teams.map((team) => {
          return (
            <Text key={team.id}>
              {team.name}: {team.score} {'\n'}
            </Text>
          );
        })}
      </Text>
      <BigButton onPress={() => navigation.replace('Home')} text="В меню" color="orange" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HowToPlay"
        component={HowToPlay}
        options={{ title: 'Как играть?' }}
      />
      <Stack.Screen name="Teams" component={Teams} options={{title: "Команды"}} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{title: "Настройки игры"}}/>
      <Stack.Screen name="Winner" component={Winner} options={{title: "Конец игры!", headerBackVisible: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button_blue: {
    borderRadius: 100,
    backgroundColor: '#3333AA',
    width: deviceWidth - 100,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_orange: {
    borderRadius: 100,
    backgroundColor: '#FF7E00',
    width: deviceWidth - 100,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleShape: {
      width: 10,
      height: 10,
      borderLeftWidth: 7,
      borderRightWidth: 7,
      borderBottomWidth: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black'
    }
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
