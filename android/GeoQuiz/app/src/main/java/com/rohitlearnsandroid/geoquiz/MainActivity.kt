package com.rohitlearnsandroid.geoquiz

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar

class MainActivity : AppCompatActivity() {
    private lateinit var trueButton: Button
    private lateinit var falseButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        trueButton = findViewById(R.id.true_button)
        falseButton = findViewById(R.id.false_button)

        val rootView: View = findViewById(R.id.root_layout)

        trueButton.setOnClickListener { _: View ->
            Snackbar.make(rootView, R.string.correct_toast, Snackbar.LENGTH_SHORT).show()
        }

        falseButton.setOnClickListener { _: View ->
            Snackbar.make(rootView, R.string.incorrect_toast, Toast.LENGTH_SHORT).show()
        }
    }
}