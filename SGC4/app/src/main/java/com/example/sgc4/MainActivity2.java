package com.example.sgc4;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.FragmentStatePagerAdapter;
import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.widget.Toolbar;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.ViewFlipper;

import com.aurelhubert.ahbottomnavigation.AHBottomNavigation;
import com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
import com.aurelhubert.ahbottomnavigation.AHBottomNavigationViewPager;
import com.google.android.material.navigation.NavigationView;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class MainActivity2 extends AppCompatActivity {
    private AHBottomNavigation ahBottomNavigation;
    private AHBottomNavigationViewPager ahBottomNavigationViewPager;
    private ViewPagerAdapter adapter;

    Toolbar toolbar;
    ViewFlipper viewFlipper;
    NavigationView navigationView;
    ListView listView;
    DrawerLayout drawerLayout;

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Anhxa
        Anhxa();
        Actionbar();
        ActionViewFlipper();

        //Bottom_navigation
        ahBottomNavigation = findViewById(R.id.AHBottomNavigation);
        ahBottomNavigationViewPager = findViewById(R.id.AHBottomNavigationViewPager);

        adapter = new ViewPagerAdapter(getSupportFragmentManager(), FragmentStatePagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT);
        ahBottomNavigationViewPager.setAdapter(adapter);

        AHBottomNavigationItem item1 = new AHBottomNavigationItem(R.string.tab_1, R.drawable.home, R.color.icon_bottom_color_active);
        AHBottomNavigationItem item2 = new AHBottomNavigationItem(R.string.tab_2, R.drawable.qua, R.color.icon_bottom_color_active);
        AHBottomNavigationItem item3 = new AHBottomNavigationItem(R.string.tab_3, R.drawable.qua, R.color.icon_bottom_color_active);
        AHBottomNavigationItem item4 = new AHBottomNavigationItem(R.string.tab_4, R.drawable.bell, R.color.icon_bottom_color_active);
        AHBottomNavigationItem item5 = new AHBottomNavigationItem(R.string.tab_5, R.drawable.qua, R.color.icon_bottom_color_active);

        ahBottomNavigation.addItem(item1);
        ahBottomNavigation.addItem(item2);
        ahBottomNavigation.addItem(item3);
        ahBottomNavigation.addItem(item4);
        ahBottomNavigation.addItem(item5);



        ahBottomNavigation.setOnTabSelectedListener(new AHBottomNavigation.OnTabSelectedListener() {
            @Override
            public boolean onTabSelected(int position, boolean wasSelected) {
                ahBottomNavigationViewPager.setCurrentItem(position);
                return true;
            }
        });

        ahBottomNavigationViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            @Override
            public void onPageSelected(int position) {
                ahBottomNavigation.setCurrentItem(position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
    }

    //thongdiepslide
    private void ActionViewFlipper() {
        ArrayList<String> mangquangcao = new ArrayList<>(); /*cấp phát vùng bộ nhớ*/
        mangquangcao.add("@drawable/thongdiep1");
        mangquangcao.add("@drawable/thongdiep2");
        mangquangcao.add("@drawable/thongdiep3");
        for (int i=0;i<mangquangcao.size();i++){
            ImageView imageView = new ImageView(getApplicationContext());
            Picasso.get().load(mangquangcao.get(i)).into(imageView);
            imageView.setScaleType(ImageView.ScaleType.FIT_XY);
            viewFlipper.addView(imageView);
        }
        viewFlipper.setFlipInterval(5000);
        viewFlipper.setAutoStart(true);
        Animation animation_slide_in = AnimationUtils.loadAnimation(getApplicationContext(),R.anim.slide_in_right);
        Animation animation_slide_out = AnimationUtils.loadAnimation(getApplicationContext(),R.anim.slide_out_right);
        viewFlipper.setInAnimation(animation_slide_in);
        viewFlipper.setOutAnimation(animation_slide_out);
    }
    private void Anhxa() {
        toolbar = (Toolbar) findViewById(R.id.toolbarmanhinhchinh);
        viewFlipper = (ViewFlipper) findViewById(R.id.viewfliper);
        navigationView = (NavigationView) findViewById(R.id.navigation_view);
        listView = (ListView) findViewById(R.id.listviewmanhinhchinh);
        drawerLayout = (DrawerLayout) findViewById(R.id.drawerlayout);
    }


    private void Actionbar() {
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setNavigationIcon(android.R.drawable.ic_dialog_info);
        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                drawerLayout.openDrawer(GravityCompat.START);
            }
        });
    }


}