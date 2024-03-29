import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';

export default class IconWithBadge extends React.Component
{
    render()
    {
        const { name, badgeCount, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                <Badge status="error" value="0" containerStyle={{ position: 'absolute', top: -4, right: -10 }}></Badge>
                {/* {badgeCount > 0 && (
                    <View style={{
                        // If you're using react-native < 0.57 overflow outside of the parent
                        // will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
                    </View>
                )} */}
            </View>
        );
    }
}