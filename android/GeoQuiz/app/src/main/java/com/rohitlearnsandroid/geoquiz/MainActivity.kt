package com.rohitlearnsandroid.geoquiz

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar
import com.rohitlearnsandroid.geoquiz.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    private val questionBank = listOf(
        Question(R.string.question_australia, true),
        Question(R.string.question_oceans, true),
        Question(R.string.question_mideast, false), Question(
            R.string
                .question_africa, false
        ),
        Question(R.string.question_americas, true),
        Question(R.string.question_asia, true)
    )

    private var currentIndex = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.questionTextView.setOnClickListener { _: View ->
            currentIndex = (currentIndex + 1) % questionBank.size

            updateQuestion()
        }

        binding.trueButton.setOnClickListener { _: View ->
            checkAnswer(true)
        }

        binding.falseButton.setOnClickListener { _: View ->
            checkAnswer(false)
        }

        updateQuestion()

        binding.nextButton.setOnClickListener { _: View ->
            currentIndex = (currentIndex + 1) % questionBank.size

            updateQuestion()
        }

        binding.prevButton.setOnClickListener { _: View ->
            currentIndex = (currentIndex - 1) % questionBank.size

            updateQuestion()
        }
    }

    private fun updateQuestion() {
        val questionTextResId = questionBank[currentIndex].textResId

        binding.questionTextView.setText(questionTextResId)
    }


    private fun checkAnswer(userAnswer: Boolean) {
        val rootView: View = findViewById(R.id.root_layout)

        if (userAnswer == questionBank[currentIndex].answer) {
            Snackbar.make(rootView, R.string.correct_toast, Snackbar.LENGTH_SHORT).show()

        } else {
            Snackbar.make(rootView, R.string.incorrect_toast, Toast.LENGTH_SHORT).show()
        }
    }
}