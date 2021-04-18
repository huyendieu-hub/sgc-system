package com.example.otp1804;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Telephony;
import android.telephony.SmsMessage;
import android.widget.EditText;

import androidx.annotation.RequiresApi;

public class OTP_Receiver1804 extends BroadcastReceiver
{ private static EditText editText;

    public void setEditText(EditText editText)
    {
        OTP_Receiver1804.editText = editText;
    }

//    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public void onReceive(Context context, Intent intent)
    {
        SmsMessage[] messages = new SmsMessage[0];
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
            messages = Telephony.Sms.Intents.getMessagesFromIntent(intent);
        }

        for (SmsMessage sms : messages)
        {
            String message = sms.getMessageBody();
            String[] otp = message.split("#");
            editText.setText(message);

        }
    }
}
